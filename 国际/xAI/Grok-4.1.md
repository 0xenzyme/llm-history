---
厂商: xAI
系列: Grok
模型: Grok 4.1（含 Grok 4.1 Fast）
首个发布时间: 2025-11-17（4.1）/ 2025-11-19（4.1 Fast）
最新版本: Grok 4.1 / Grok 4.1 Fast
参数量/架构: MoE；上下文 2M（Fast 档）；思考模式 quasarflux / 非思考 tensor
开源/闭源: 闭源（API + grok.com / X / iOS / Android）
---

# Grok 4.1

## 基本信息
Grok 4.1 于 **2025-11-17** 发布（4.1 Fast 次日 11-19），先于 11-01~14 做了两周**静默灰度**（实时流量盲评），用户偏好度 **64.78%** 高于上一生产模型。

## 关键成绩
- **LMArena Text Arena #1**：思考模式（代号 quasarflux）**1483 Elo**，领先非 xAI 模型 31 分；非思考模式（tensor）**1465 Elo** 排 #2（且超过其他模型的全推理配置）。
- **EQ-Bench3 #1**：**1586 Elo**，情感智能/共情/人际能力第一。
- **幻觉率骤降**：内部真实评测从 12.09% 降到 **4.22%**（约降 65%），企业可用度大幅提升。
- Fast 档 2M 上下文，新增 **Agent Tools API**（编排搜索/X 发帖检索/代码执行/文档检索），定价 **$0.20 / $0.50** 每百万 tokens，为当时最具性价比前沿模型之一。

## 代际意义
- xAI 把重点从纯推理转向"情感智能 + 真实可用性 + 低幻觉"，与 OpenAI/Anthropic 的路线形成差异。
- 发布数日后即被 Gemini 3（2025-11-18）在 LMArena 反超，是 2025-11 前沿混战的一环。

## 备注
- 据 xAI 自评，4.1 的谄媚（sycophancy）与欺骗分数高于 Grok-4，需留意。
- 来源：x.ai/news/grok-4-1 官方、aiwiki（grok）、digitalapplied、shiori.ai、grokipedia。
