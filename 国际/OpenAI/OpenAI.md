---
厂商: OpenAI
地区: 国际（美国）
总部: 美国旧金山
定位: 前沿闭源通用模型 + ChatGPT + API / 开发者生态
开源/闭源: 闭源为主；2025-08 以 gpt-oss（120B/20B，Apache 2.0）试水开放权重
模型系列: GPT（通用/统一推理）+ o 系列（推理，已并入 GPT-5）+ Sora（视频，已停运）；另有 DALL·E、Whisper、Codex
数据来源: OpenAI 官方 openai.com、hasbeenreleased.com、systems-analysis.info、aiwiki、Artificial Analysis、路透社、英国议会听证会记录
状态: 已完善（含 2026-10 最新 GPT-6 全量推送 / Intelligent UI / GPT-6.1 Sol；GPT-6.1 Astra 已取消）
---

# OpenAI

- 地区：国际（美国）
- 总部：美国旧金山
- 定位：前沿闭源通用模型 + ChatGPT + API / 开发者生态
- 开源/闭源：闭源为主；2025-08 以 gpt-oss（120B/20B，Apache 2.0）试水开放权重
- 模型系列：
  - [GPT](./GPT/index.md)（通用对话 / 指令 / 统一推理）
  - [o 系列](./o系列/index.md)（推理模型，已并入 GPT-5 统一路由）
  - [Sora](./Sora/index.md)（视频生成，**已停运**：API 于 2026-09-24 关闭，无继任者）
  - 其他产品线：DALL·E（图像）、Whisper（语音）、Codex（编码 Agent）
- 数据来源：OpenAI 官方 openai.com、hasbeenreleased.com、systems-analysis.info、aiwiki、Artificial Analysis、路透社、英国议会听证会记录
- 状态：已完善（含 2026-10 最新 GPT-6 全量推送 / Intelligent UI / GPT-6.1 Sol；GPT-6.1 Astra 已取消）

## 关键里程碑

- 2018-06 GPT-1 首个生成式预训练 Transformer（研究模型）。
- 2020-06 GPT-3（175B），首个广泛商用 API 模型。
- 2022-11-30 ChatGPT 发布（基于 GPT-3.5），引爆生成式 AI 普及。
- 2023-03-14 GPT-4 多模态（图像输入），能力跃升。
- 2024-05-13 GPT-4o 原生多模态（文本 / 图像 / 音频一体）。
- 2024-09-12 o1-preview 首个推理模型（思考后再答）。
- 2025-08-07 GPT-5 统一对话线与推理线，实时路由器自动选 fast / thinking。
- 2025-12-11 GPT-5.2 三档（Instant / Thinking / Pro），抽象推理近三倍跃升。
- 2026-04-23 GPT-5.5 将上下文扩展到 1M+。
- 2026-09-03 GPT-6 Astra 发布，新架构、1.05M 上下文，当前旗舰。
- 2026-09-22 GPT-6 Sol / Luna 发布（较 5.6 便宜约 50%），构成 Astra/Sol/Luna 三档家族。
- 2026-09-24 Sora API 关闭（App 已于 2026-04-26 下线），OpenAI 视频生成产品线终止，无继任者。
- **2026-09-28 GPT-6.1 Astra 因安全评估未通过被取消发布**（路透社）。这是首次有旗舰模型被内部安全测试真正挡下。10-15 英国议会听证会上 OpenAI 副总裁 Tom Duff Gordon 公开承认，原话："我们发现它拒绝得不够多，对齐方面的进展不够。"
- 2026-09-29 **GPT-6.1 Sol** 顶替 Astra 上线（价格约为 Astra 的 1/5，编码与电脑操作能力接近）；同日 **Decisions API** 上线——不生成文本，只从预设答案中做选择，约 150ms/次，仅按输入计费。
- 2026-10-07/08 **GPT-6 全量推送 ChatGPT**：Plus/Pro/Business/Enterprise 走 GPT-6 Sol，Free/Go 走 GPT-6 Luna；同步上线 **Intelligent UI**（回答可生成图表、表单、按钮与可点小工具，且边生成边呈现）。ChatGPT 周活用户超 12 亿。
- 2026-10-09 GPT-6.1 Sol Ultrafast 版本上线；10-12 默认上下文提至 500k。
- 2026-10-16 **GPT-Live-1.1 for Voice** 开始推送（ChatGPT / Codex / dots 新语音，改进法/德/印地/墨西哥西语/韩/日口音），API 稍后开放。

## 近一月动态（2026-09-22 → 2026-10-22）

| 日期 | 事件 | 来源 |
|---|---|---|
| 09-28 | GPT-6.1 Astra 取消发布（安全评估未过）；约 10% 总算力转向安全与对齐研究 | 路透社、雪球《全球大模型跟踪》(10.15) |
| 09-29 | GPT-6.1 Sol 上线（≈Astra 1/5 价格）；Decisions API 上线（10-06 公开测试） | OpenAI 官方 |
| 10-07/08 | GPT-6 全量开放（Sol / Luna）＋ Intelligent UI；周活超 12 亿 | OpenAI 官方、凤凰网科技、澎湃 |
| 10-09 | GPT-6.1 Sol Ultrafast 上线 | IT 时代网月报 (10.14) |
| 10-12 | GPT-6.1 Sol 默认上下文提至 500k | IT 时代网月报、雪球 |
| 10-16 | GPT-Live-1.1 for Voice 推送 | The Neuron (10.16) |
| 10 月中 | 微软披露 GPT-6.1 Sol 与 GPT-6 Sol **同基座权重**、推理循环由 3 轮降至 2 轮 | 雪球 (10.15) |
| 10 月初 | 披露截至 9 月底年化营收运行率约 **500 亿美元**，显著低于市场预期的近 700 亿 | 雪球 (10.15) |
| 10 月 | 新一轮融资洽谈引入阿联酋 MGX 等，讨论最高 100 亿美元投资，投前估值约 1.4 万亿；软银 300 亿美元承诺 10 月初全部到位 | IT 时代网月报 |
| 10 月 | 推出 textGrain 文本水印以响应欧盟 AI 法案（1% 误报率下 200 词段落检出率约 80%） | IT 时代网月报 |

> ⚠️ 需注意：GPT-6 Sol 的开发者口碑存在分歧——Artificial Analysis 综合智能榜上 GPT-6 Sol 与 GPT-5.6 Sol 评分接近，GPT-6 Luna 排名在 DeepSeek V4.1-Flash 与 Claude Haiku 5.5 之后（凤凰网科技引开发者反馈）。

## 系列导航

- [GPT 系列](./GPT/index.md)
- [o 系列（推理）](./o系列/index.md)
- [Sora（视频）](./Sora/index.md)（已停运）

## 备注

- OpenAI 的模型谱系是"分叉再收敛"：基础 GPT 线 → 多模态 omni 线（4o） + 独立 o 推理线（o1→o3）→ 收敛为 GPT-5 统一系统。
- 自 GPT-5 起，o 系列作为独立 ChatGPT picker 退役，推理能力并入统一路由；API 上 o3 / o3-pro 等仍保留至 2026-10。
- 日期冲突处理：GPT-3 取 2020-06（部分中文源记 05，以 OpenAI 官方/英文源为准）；GPT-3.5 以 ChatGPT 发布 2022-11-30 为准。
