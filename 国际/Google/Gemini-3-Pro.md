---
厂商: Google（Google DeepMind）
系列: Gemini
模型: Gemini 3 Pro
首个发布时间: 2025-11-18
最新版本: Gemini 3 Pro（3.x 点发布，最新为 2026-07-21 的 3.6 Flash 组）
参数量/架构: 超万亿参数，稀疏 MoE；TPU 训练；上下文 1M / 输出 64K；知识截止 2025-01
开源/闭源: 闭源（API：Google AI Studio / Vertex AI / Gemini App / Gemini CLI）
---

# Gemini 3 Pro

## 基本信息
Gemini 3 Pro 于 **2025-11-18** 发布，是 Gemini 第三代旗舰，Google 称为"迄今最智能的模型""全球最佳多模态理解模型"。超万亿参数、TPU 训练，1M 上下文、64K 输出、知识截止 2025-01。

## 关键成绩（发布时）
- **LMArena 1501 Elo**——首个公开可用、突破 1500 的文本模型，登顶文本/视觉/Web 开发三榜。
- **GPQA Diamond 91.9%**（超人类专家基线）。
- **HLE 37.5%**（无工具）；**SWE-bench Verified 76.2%**（编码，略低于 Claude 77.2%）；**ARC-AGI-2 31.1%**。
- 发布当日即整合进 Gemini App、Search AI Mode、API、Vertex AI、Gemini Code Assist，并同步推出智能体 IDE **Antigravity**——Google 首次在发布日跨消费/开发/企业全平台同步上线。

## 生态与竞争
- 引发 OpenAI "红色警报"：山姆·奥特曼于 2025-12 要求团队加速 ChatGPT；OpenAI 以 **GPT-5.2（2025-12-11）** 架构重构作为技术反制。
- 3 Pro 定价 **$2 / $12 每百万 tokens**；原 `gemini-3-pro-preview` 模型串于 2026-03-09 退役，由 3.1 Pro 接棒旗舰。

## 3 代点发布脉络（非第 4 代）
- 3 Flash（2025-12-17 发布 / 12-22）：SWE-bench 78%，取代 3 Pro 成默认模型，定价 $0.50/$3。
- 3 Deep Think（2026-02-12 重大更新）：ARC-AGI-2 **84.6%**（纪录）、HLE 48.4% 无工具、输出上限 192K。
- 3.1 Pro Preview（2026-02-19）：ARC-AGI-2 77.1%（3 Pro 的两倍+）、GPQA 94.3%；命名由 .5 改 .1。
- 后续点发布：3.1 Flash Image / 3.1 Flash-Lite / Robotics-ER 1.6 / Deep Research Max / **3.5 Flash（2026-05-19）** / Omni Flash / Nano Banana 2 Lite / **3.6 Flash 组（2026-07-21）**。

## 备注
- 3 Deep Think 是推理模式而非独立模型；"Gemini 3" 在 HLE 等基准上曾报 41.0%（Deep Think 模式，发布时安全评估中）。
- 来源：Google DeepMind 官方、aiwiki（gemini_3 / Google_DeepMind）、百度百科、llmreference。
