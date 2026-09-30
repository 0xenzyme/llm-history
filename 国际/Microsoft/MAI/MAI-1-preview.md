---
厂商: Microsoft
系列: MAI
模型: MAI-1-preview
首个发布时间: 2025-08-28
最新版本: MAI-1-preview（preview 状态，后续被 MAI-Thinking-1 接棒）
参数量/架构: MoE；业界报道约 500B 量级（未官方确认）；约 15,000× NVIDIA H100 训练
开源/闭源: 闭源（LMArena 公开测试 + 受信任测试者 API）
数据来源: microsoft.ai "Two in-house models in support of our mission"(2025-08-28)、The Verge、GIGAZINE、windowsnews.ai、crafiq
状态: 已完善
---

# MAI-1-preview

## 一句话

微软**首个端到端完全自研的基础模型**，标志着微软从 OpenAI 集成商转向自主模型研发。

## 发布时间线

- **2025-08-28**：与 MAI-Voice-1 同日发布，官方博客标题《Two in-house models in support of our mission》（Mustafa Suleyman 署名）。
- 同日：MAI-1-preview 上 LMArena 公开测试，初期文本榜第 13 位。
- 之后数周：逐步替换进 Copilot 的部分文本场景；开放受信任测试者 API 申请。

## 规格

| 项 | 值 |
|---|---|
| 架构 | MoE（混合专家） |
| 参数 | 未官方披露；业界报道约 500B 量级 |
| 训练算力 | 约 15,000× NVIDIA H100（另有 GB200 集群作为下一代算力路线） |
| 定位 | 面向消费者的指令遵循与日常问答 |
| 许可 | 闭源 |

## 战略意义

- 微软对 OpenAI 累计投资 130 亿美元，协议至 2030 年，但含 **AGI 排除条款**——若 OpenAI 宣称达到 AGI，微软授权可能被切断。这是自研的核心动机。
- Suleyman 的原话："我们是世界上最大的公司之一，必须具备内部专业知识和能力去打造世界上最强的模型。"
- 路线是"**编排一批专用模型**"而非"一个通吃模型"，此后 MAI 家族在 2026 年扩展为推理/代码/图像/语音/转写多条线。

## 备注

- 发布时 LMArena 第 13 位，低于 Anthropic、DeepSeek、Google、OpenAI 的产品——微软承认仍有差距。
- 有报道称项目曾遇技术困难（复现 OpenAI 的思维链推理能力受阻），并伴随关键人才离职。
- **参数量 500B 未获官方确认**，仅为业界报道，引用时需注明。
- MAI-1-preview 始终停留在 preview，未转为正式版；2026-06 由 MAI-Thinking-1 接棒成为主力。
