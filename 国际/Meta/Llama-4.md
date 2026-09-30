---
厂商: Meta（Meta AI / FAIR）
系列: Llama
模型: Llama 4（Scout / Maverick / Behemoth）
首个发布时间: 2025-04-05
最新版本: Llama 4 Scout / Maverick（Behemoth 从未发布）
参数量/架构: MoE + 原生多模态；30T+ tokens 训练，2024-08 数据截止，支持 12 种语言
开源/闭源: 开放权重（Llama 4 社区许可）
---

# Llama 4

## 基本信息
Llama 4 于 **2025-04-05** 发布，是 Llama 家族首次转向 **MoE（稀疏混合专家）+ 原生多模态**的一代。在 30 万亿 tokens 上训练，数据截止 2024-08，支持 12 种语言。

## 三个档位
| 档位 | 激活 / 总参数 | 专家数 | 上下文 | 状态 |
|---|---|---|---|---|
| **Scout** | 17B 激活 / 109B 总 | 16 | **10M**（官方最大值声明） | 已发布 |
| **Maverick** | 17B 激活 / 400B 总 | 128 | **1M** | 已发布 |
| **Behemoth** | 288B 激活 / ~2T 总 | 16 | — | **仅预览，从未发布**，Meta 未正式宣布取消；作为教师模型蒸馏 Scout/Maverick |

## 关键意义
- 把 Llama 从 Dense 基座推进到 MoE 多模态时代，与同期 DeepSeek V3 / Qwen3 的 MoE 路线一致。
- 10M 上下文声明是当时公开模型中最激进的长上下文主张（需注意：这是模型最大声明值，非任何服务栈都能经济准确处理）。

## 争议（重要）
- 独立测试者发现，实际部署的 Scout / Maverick 与 Meta 提交 LMArena 排行榜的版本（未发布的 `Llama-4-Maverick-03-26-Experimental`）**行为不一致**。
- Meta 生成式 AI VP Ahmad Al-Dahle 于 2025-04-07 否认在测试集上训练，称差异源于"实现需要稳定"。
- **2026-01**，Yann LeCun 宣布离职后向《金融时报》承认，研究人员确实"fudged a little bit"——在不同基准上报告不同 Llama 4 变体的结果并合并呈现。

## 后续
- 截至 2026-08，Meta 自 2025-04 起**未再发布新的开放权重 Llama 代**；前沿工作转向 **Muse** 线（Spark 闭源 API / Glimmer Apache-2.0 30B 端侧，2026-08-10）。
- 同期发布 Llama API 预览（2025-04），Cerebras / Groq 作为提供方，是 Meta 首次在模型侧尝试直接变现。

## 备注
- 上下文 10M / 1M 为官方声明上限，实际部署受显存与服务栈限制。
- 来源：Meta 官方、aiwiki（meta_ai）、benched.ai、dataaihub。
