---
厂商: Microsoft
系列: MAI（Microsoft AI）
首个发布时间: 2025-08-28（MAI-Voice-1 + MAI-1-preview）
最新版本: MAI-Thinking-1（2026-06-02）/ MAI-Image-2.5-Pro（2026-07-23）
开源/闭源: 闭源（Foundry / Azure / OpenRouter / Fireworks / Baseten 分发）
数据来源: microsoft.ai 官方、Microsoft Build 2026 官方博客(2026-06-02)与 MAI keynote 实录、微软新闻中心(2026-06-04)、百度百科(MAI-Thinking-1)、AIDb
状态: 已完善
---

# MAI 系列（Microsoft AI 自研前沿家族）

MAI 是微软从"OpenAI 分发渠道"转向"独立前沿实验室"的产物。2025-08 首次发布自研模型，2026-06 在 Build 2026 一次性发布七模型，覆盖文本/推理/图像/语音/转写/代码六大模态。

## 版本演进表

| 模型 | 发布 | 模态 / 规格 | 备注 |
|---|---|---|---|
| MAI-Voice-1 | 2025-08-28 | 语音合成 | 单 GPU 上 <1 秒生成 1 分钟音频；已用于 Copilot Daily / Podcasts |
| **MAI-1-preview** | 2025-08-28 | 文本 MoE，约 15,000× H100 训练 | 微软首个端到端自研基础模型，[详情](./MAI-1-preview.md) |
| MAI-DS-R1 | 2025 | 文本推理 | 基于 DeepSeek-R1 的托管版本（非自研） |
| MAI-Image-2 Efficient | 2026 春 | 图像生成 | Foundry 国际版首发批次 |
| MAI-Image-2 | 2026 春 | 图像生成 | |
| MAI-Transcribe-1 | 2026 春 | 语音识别 | |
| **MAI-Thinking-1** | 2026-06-02 | 文本推理 MoE，35B 激活 / 256K | 首个自研推理模型，[详情](./MAI-Thinking-1.md) |
| **MAI-Code-1-Flash** | 2026-06-02 | 代码，5B | SWE-Bench Pro 51%，VS Code 默认模型之一 |
| MAI-Image-2.5 / Flash | 2026-06-02 | 图像生成 + 图生图编辑 | Arena 首发第 2/3 名 |
| MAI-Voice-2 / Flash | 2026-06-02 | 语音合成，15+ 语言 | 身份保留 + voice prompting |
| MAI-Transcribe-1.5 | 2026-06-02 | 语音识别，43 语言 | FLEURS 第一，约 5× 速度 |
| MAI-Image-2.5-Pro | 2026-07-23 | 高保真图像档 | 与 MAI-Voice-2-Flash 同日上线 |

## 重点 model 文档

- [MAI-1-preview](./MAI-1-preview.md)
- [MAI-Thinking-1](./MAI-Thinking-1.md)

## Build 2026 七模型（2026-06-02）

微软 AI 团队一次性发布跨四模态的七个模型，官方定调为"微软成为独立前沿实验室"：

1. **MAI-Thinking-1** — 首个文本推理模型，MoE 35B 激活，256K 上下文
2. **MAI-Code-1-Flash** — 5B 推理高效编码模型，SWE-Bench Pro 51%
3. **MAI-Image-2.5** + Flash — 图像生成，新增图生图编辑
4. **MAI-Voice-2** + Flash — 语音合成，15+ 语言
5. **MAI-Transcribe-1.5** — 语音识别，43 语言

分发：Foundry / Azure、Copilot / Bing / PowerPoint / GitHub、以及 OpenRouter、Fireworks、Baseten（首次允许开发者直接微调权重）。

## 备注

- **"零蒸馏"是 MAI 的核心叙事**：MAI-Thinking-1 从零训练、未使用任何第三方模型蒸馏数据，强调企业级干净数据血缘与可商用授权。
- **软硬协同**：MAI-Thinking-1 与自研 **Maia 200** 芯片协同设计，端到端性能功耗比再提升 1.4×（在 30% 改进之上）。
- **上下文存在来源冲突**：官方 keynote 与微软新闻中心写 256K，百度百科写 128K。本库以官方英文为准取 **256K**。
- **Build 2026 日期**：微软官方博客标注 2026-06-02，百度百科记 2026-06-03（时区差）。本库统一取 06-02。
- MAI-DS-R1 是 DeepSeek-R1 的托管版本，**不属于自研**，列出仅为完整性。
