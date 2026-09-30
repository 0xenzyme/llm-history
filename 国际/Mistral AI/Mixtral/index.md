---
厂商: Mistral AI
系列: Mixtral（稀疏 MoE 线）
开源/闭源: 开放权重（Apache 2.0）
首个发布时间: 2023-12-11（Mixtral 8x7B）
最新版本: Mixtral 8x22B（2024-04-10）
数据来源: mistral.ai 官方模型治理页、aiwiki
状态: 已完善
---


# Mixtral 系列（MoE 线）

## 概览
Mixtral 是 Mistral AI 的**稀疏混合专家（MoE）**线，也是开放权重社区最早成功的 MoE 模型系列。核心设计：每层 8 个前馈专家块，路由网络为每个 token 选 2 个专家——用远低于稠密模型的推理成本，达到甚至超越更大稠密模型的效果。

## 版本演进表
| 模型 | 发布时间 | 总参数 / 激活参数 | 上下文 | 备注 |
|---|---|---|---|---|
| Mixtral 8x7B | 2023-12-11 | 46.7B 总 / ~12.9B 激活 | 32K | 每层 8 专家选 2；Apache 2.0；BT 磁力链发布；多数基准超 Llama 2 70B 且推理快约 6× |
| Mixtral 8x22B | 2024-04-10（官方页 04-17） | 141B 总 / 39B 激活 | 64K | Apache 2.0；编码与数学任务突出；同为磁力链发布 |

## 架构意义
- Mixtral 8x7B 证明了**开放权重 MoE 的可行性**，直接启发了后续 DeepSeek V2/V3、Qwen3、Llama 4 等大规模采用 MoE 的路线。
- "小激活、大总参"的性价比范式成为行业标准做法。

## 重点 model 文档
- [Mixtral-8x7B](./Mixtral-8x7B.md)

## 备注
- Mixtral 系列自 2024-04 后未见新代；Mistral 后续的前沿能力由 Mistral Large 3（2025-12-02）等通用线承接。
- 同期还有 **Codestral Mamba**（2024-07）等 Mamba 架构探索，但不属于 Mixtral 命名线。
- 来源：mistral.ai 官方模型治理页、aiwiki（mistral_ai）、llm-evolution。
