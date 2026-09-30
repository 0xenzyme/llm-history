import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

// 脚本自身位于 <repo>/tools/，仓库根目录即其上级目录
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir, out = []) {
  for (const e of readdirSync(dir)) {
    if (e === ".workbuddy" || e === "node_modules" || e.startsWith(".")) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (e.endsWith(".md")) out.push(p);
  }
  return out;
}

const files = walk(ROOT).filter((f) => !f.includes("_review"));
const rel = (f) => relative(ROOT, f).replace(/\\/g, "/");

// ---------- 1. frontmatter 字段一致性 ----------
const fmMap = new Map(); // file -> fields
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  if (!txt.startsWith("---")) { fmMap.set(f, null); continue; }
  const end = txt.indexOf("\n---", 3);
  if (end < 0) { fmMap.set(f, null); continue; }
  const block = txt.slice(3, end);
  const fields = block.split("\n").map((l) => l.match(/^([\w\-\u4e00-\u9fa5]+):/)).filter(Boolean).map((m) => m[1]);
  fmMap.set(f, fields);
}

const noFm = [...fmMap].filter(([, v]) => v === null).map(([k]) => rel(k));
const fieldSets = new Map();
for (const [f, v] of fmMap) {
  if (!v) continue;
  const key = v.join("|");
  if (!fieldSets.has(key)) fieldSets.set(key, []);
  fieldSets.get(key).push(rel(f));
}

console.log("=== 1. FRONTMATTER ===");
console.log("无 frontmatter 的文件:", noFm.length ? noFm : "（无）");
console.log("字段模式种类:", fieldSets.size);
for (const [k, v] of [...fieldSets.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n[${v.length} 个] ${k}`);
  console.log("  例: " + v.slice(0, 4).join(", ") + (v.length > 4 ? " ..." : ""));
}

// ---------- 2. 内部链接校验 ----------
console.log("\n=== 2. 内部链接 ===");
const broken = [];
let linkCount = 0;
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  const re = /\[[^\]]*\]\((\.[^)#\s]+)\)/g;
  let m;
  while ((m = re.exec(txt))) {
    linkCount++;
    let target = decodeURIComponent(m[1]);
    const full = resolve(dirname(f), target);
    if (!existsSync(full)) broken.push(`${rel(f)}  ->  ${target}`);
  }
}
console.log(`共 ${linkCount} 条相对链接，断链 ${broken.length} 条`);
broken.forEach((b) => console.log("  ✗ " + b));

// ---------- 3. 孤立文件（无任何入链） ----------
console.log("\n=== 3. 入链情况 ===");
const linked = new Set();
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  const re = /\[[^\]]*\]\((\.[^)#\s]+)\)/g;
  let m;
  while ((m = re.exec(txt))) {
    linked.add(rel(resolve(dirname(f), decodeURIComponent(m[1]))).replace(/\\/g, "/"));
  }
}
const orphans = files.map(rel).filter((r) => !linked.has(r) && !r.endsWith("index.md"));
console.log("无入链文件:", orphans.length ? orphans : "（无）");

// ---------- 4. 目录结构 / 命名 ----------
console.log("\n=== 4. 目录树 ===");
const tree = {};
for (const f of files.map(rel)) {
  const parts = f.split("/");
  let cur = tree;
  for (const p of parts) { cur[p] = cur[p] || {}; cur = cur[p]; }
}
function printTree(node, indent = "") {
  for (const k of Object.keys(node).sort()) {
    const isFile = k.endsWith(".md");
    console.log(indent + (isFile ? "· " : "▸ ") + k);
    if (!isFile) printTree(node[k], indent + "  ");
  }
}
printTree(tree);

// ---------- 5. 占位/待核实残留 ----------
console.log("\n=== 5. 占位残留 ===");
for (const f of files) {
  const txt = readFileSync(f, "utf8");
  const hits = [];
  for (const kw of ["待核实", "待填", "待补充", "TBD", "骨架"]) {
    const n = (txt.match(new RegExp(kw, "g")) || []).length;
    if (n) hits.push(`${kw}×${n}`);
  }
  if (hits.length) console.log(`  ${rel(f)}: ${hits.join(", ")}`);
}
