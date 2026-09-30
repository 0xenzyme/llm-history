// 提交前脱敏自检：扫描邮箱 / 密钥串 / key 赋值 / 私钥 / 手机号 / 本地绝对路径 / 内网 IP
// 用法：node tools/check-sensitive.mjs   （有输出即为命中，需处理后再提交）
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const pats = {
  邮箱: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g,
  密钥串: /(sk-[A-Za-z0-9_-]{8,}|ghp_[A-Za-z0-9]{10,}|AKIA[0-9A-Z]{16})/g,
  key赋值: /(api[_-]?key|token|secret|password|access[_-]?key)\s*[:=]\s*\S{8,}/gi,
  私钥: /-----BEGIN [A-Z ]*PRIVATE KEY-----/g,
  手机号: /(?<!\d)1[3-9]\d{9}(?!\d)/g,
  本地绝对路径: /[A-Za-z]:[\\/](?:Users|project|home)[\\/][^\s`"'"'"'()（）、，。]*/g,
  内网IP: /(?<!\d)(10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)(?!\d)/g,
};

const exts = new Set([".md", ".mjs", ".json", ".yaml", ".yml"]);
const skip = new Set(["node_modules", ".git", ".workbuddy"]);
const hits = {};

function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    if (skip.has(e.name) || e.name.startsWith(".")) continue;
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (exts.has(path.extname(e.name))) {
      let t;
      try { t = fs.readFileSync(p, "utf8"); } catch { continue; }
      t.split("\n").forEach((l, i) => {
        for (const [k, re] of Object.entries(pats)) {
          const m = l.match(re);
          if (m) {
            (hits[k] = hits[k] || []).push(
              path.relative(ROOT, p).replace(/\\/g, "/") + ":" + (i + 1) + "  " +
              m.slice(0, 3).join(" | ").slice(0, 140)
            );
          }
        }
      });
    }
  }
}
walk(ROOT);

const keys = Object.keys(hits);
if (!keys.length) {
  console.log("未发现敏感信息，可安全提交");
  process.exit(0);
}
for (const k of keys) {
  const v = hits[k];
  console.log("=== " + k + " (" + v.length + " 处) ===");
  v.slice(0, 15).forEach((x) => console.log("  " + x));
  if (v.length > 15) console.log("  ... 其余 " + (v.length - 15) + " 处");
}
process.exit(1);
