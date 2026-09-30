---
厂商: AI21 Labs
系列: Jamba
模型: Jamba2
首个发布时间: 2026-01（aiwiki 记 01-08，faun.dev 记 01-06）
最新版本: Jamba2 3B / Mini（2026-01）
参数量/架构: 3B dense；Mini 为 MoE 52B 总 / 12B 激活；均为 256K 原生上下文
开源/闭源: Apache 2.0 开放权重
数据来源: ai21.com 官方博客、aiwiki(jamba_2)、faun.dev、Hugging Face(ai21labs)
状态: 已完善
---

# Jamba2

## 一句话

AI21 把混合架构压到端侧的一代：3B dense 能在 iPhone / Android / Mac / PC 上跑，Mini 则在企业级可靠性（指令遵循 + grounding）上对标同类。

## 发布时间线

- **2026-01**：Jamba2 3B 与 Jamba2 Mini 同日发布，Apache 2.0；另发布 Mini 的 FP8 量化版。
- 2026-05-18：AI21 裁员 60%+ 并停售独立模型，此后无 Jamba 路线图。

## 规格

| 变体 | 参数 | 激活 | 上下文 | 许可 | HF 仓库 |
|---|---|---|---|---|---|
| Jamba2 3B | 3B（dense） | 3B | 256K | Apache 2.0 | `ai21labs/AI21-Jamba2-3B` |
| Jamba2 Mini | 52B 总 | 12B | 256K | Apache 2.0 | `ai21labs/AI21-Jamba2-Mini` |
| Jamba2 Mini FP8 | 52B 总 | 12B | 256K | Apache 2.0 | `ai21labs/AI21-Jamba2-Mini-FP8` |

> FP8 是训练后量化版本，面向 vLLM 等高吞吐服务栈，**不是架构上的独立模型**。

## 设计取向：可靠性优先于"思考"

AI21 的明确判断是——**并非每个企业工作流都需要推理模型的高成本与高延迟**。因此 Jamba2 定位为：

- 产出精确、有 grounding 的答案（技术手册、研究论文、公司政策、内部知识库）
- 避开推理模型的 "thinking token" 开销
- 在模型路由器中作为"低成本高精度档"被调用

衡量指标刻意选了两类：指令遵循类基准（IFBench、IFEval、Collie）与 grounding 基准（FACTS）。

## 能力

- 在 IFBench / IFEval / Collie / FACTS 上为同类领先。
- 人工盲评对比 Jamba2 Mini 与 Ministral3 14B：在真实企业任务提示集上，Jamba2 Mini 在整体输出质量与胜率上有统计显著优势。
- 即使上下文扩展到 100K tokens 仍保持高吞吐（混合架构的内存效率优势）。

## 备注

- **没有 Jamba2 Large**：发布时未推出，AI21 也未承诺时间表；Jamba 1.5 Large 仍是家族最大公开 checkpoint。
- 官方未单独发布 Jamba2 技术报告，架构描述沿用前代（Mamba-Transformer 混合）。
- AI21 自 2026-05 已不再销售独立模型，Jamba2 实际是**该家族最后一代**。
