---
厂商: OpenAI
系列: GPT
数据来源: OpenAI 官方、aiwiki、Artificial Analysis、hasbeenreleased.com
状态: 已完善（含 2026-09 最新 GPT-6 Astra / Sol / Luna）
---

# GPT 系列

厂商：OpenAI
开源/闭源：闭源（gpt-oss 实验性开放权重除外）
定位：通用对话 / 指令 / 统一推理旗舰线

## 版本演进（主线，含代际跳跃）

| 模型 | 发布时间 | 参数/上下文 | 开源 | 备注 |
|---|---|---|---|---|
| GPT-1 | 2018-06 | 1.17 亿 | 否 | 首个 GPT，研究模型 |
| GPT-2 | 2019-02 | 15 亿 | 否（后开源） | 分阶段发布防滥用 |
| GPT-3 | 2020-06 | 175B | 否（API） | few-shot 突破 |
| GPT-3.5 | 2022-11-30 | — | 否 | ChatGPT 起点，RLHF |
| GPT-4 | 2023-03-14 | MoE（未公开） | 否 | 多模态（图像输入） |
| GPT-4 Turbo | 2023-11-06 | 128K | 否 | DevDay，JSON 模式 |
| GPT-4o | 2024-05-13 | 原生多模态 | 否 | 文本/图像/音频一体 |
| GPT-4.5 | 2025-02-27 | 代号 Orion | 否 | 短命研究预览 |
| GPT-4.1 | 2025-04-14 | 1M | 否（API） | 编码/长上下文 |
| GPT-5 | 2025-08-07 | 400K / 128K 输出 | 否 | 统一路由，[详情](./GPT-5.md) |
| GPT-5.1 | 2025-11-12 | 400K | 否 | 指令遵循/降幻觉 |
| GPT-5.2 | 2025-12-11 | 400K | 否 | 三档 Instant/Thinking/Pro |
| GPT-5.3 | 2026-02~03 | 400K | 否 | Instant(03-03)、Codex 变体(02-05) |
| GPT-5.4 | 2026-03-05/06 | 400K | 否 | 原生 computer-use、编码 |
| GPT-5.5 | 2026-04-23 | 1M+ | 否 | 5.5 Instant 5-05 成默认 |
| GPT-5.6 | 2026-07 | 1M | 否 | Sol/Terra/Luna 三尺寸（07-09 GA） |
| GPT-6（Astra/Sol/Luna） | 2026-09-03 / 09-22 | 1.05M / 128K 输出 | 否 | 新架构三档家族，[详情](./GPT-6.md) |

## 重点 model 文档

- [GPT-5](./GPT-5.md)
- [GPT-6 Astra](./GPT-6.md)

## 备注

- GPT-5 之后点发布（point release）承载了大部分实质能力提升，迭代节奏从"年"缩短到"周/月"。
- GPT-6 为截至 2026-09 记录时的最新代际，采用"天体命名 + 分档演进"：Astra（旗舰，09-03）、Sol（中端编码/Agent，09-22，$2/$10）、Luna（轻量高吞吐，09-22，$0.10/$0.50）；三者共享 1.05M 上下文。详见 [GPT-6.md](./GPT-6.md)。
- 来源：OpenAI 官方公告、hasbeenreleased.com、systems-analysis.info、aiwiki、gradually.ai/devdiggers 综合。
