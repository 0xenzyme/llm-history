---
厂商: AI21 Labs
地区: 国际
总部: 以色列 特拉维夫
成立: 2017-11
定位: 企业级混合架构（Mamba-Transformer）模型；2026-05 起转向 Maestro Agent 平台
开源/闭源: 混合——Jamba v0.1 / Reasoning 3B / Jamba2 为 Apache 2.0；Jamba 1.5/1.6/1.7 为 Jamba Open Model License（年营收超 5000 万美元的组织商用受限）
模型系列: Jamba（混合 SSM-Transformer）；前代 Jurassic
数据来源: AI21 官方文档(docs.ai21.com)、ai21.com 博客、aiwiki(jamba_2)、centerconsulting、faun.dev、arXiv 2403.19887
状态: 已完善；**注意 2026-05-18 公司裁员 60%+ 并停售独立模型，Jamba 路线图自此后未再公布**
---

# AI21 Labs（Jamba）

Jamba 是最早把 **Mamba 状态空间层与 Transformer 注意力层交错**并做到生产规模的模型家族——核心价值不在跑分，而在**长上下文的内存与吞吐成本**：长文档能在更少 GPU 上跑。

## 版本演进表

| 模型 | 发布 | 参数 | 上下文 | 许可 | 备注 |
|---|---|---|---|---|---|
| Jurassic-1 Jumbo | 2021 | 178B | — | 闭源 | 前代旗舰，与 Jamba 无架构关联 |
| **Jamba v0.1** | 2024-03 | 52B 总 / 12B 激活 | 256K | Apache 2.0 | 首个生产级混合 Transformer-Mamba，论文 arXiv:2403.19887 |
| Jamba 1.5 Mini / Large | 2024-08 | Mini 52B(12B)，Large | 256K | Jamba Open Model License | 引入 MoE |
| Jamba 1.6 | 2025-03 | — | 256K | Jamba Open Model License | |
| Jamba 1.7 Large | 2025-07 | **398B 总 / 94B 激活** | 256K | Jamba Open Model License | 知识截止 2024-08-22 |
| Jamba Reasoning 3B | 2025-10 | 3B | 256K | Apache 2.0 | 小型推理模型 |
| **Jamba2 3B** | 2026-01 | 3B dense | 256K | Apache 2.0 | 手机/Mac/PC 可跑，[详情](./Jamba2.md) |
| **Jamba2 Mini** | 2026-01 | 52B 总 / 12B 激活 | 256K | Apache 2.0 | [详情](./Jamba2.md) |
| Jamba2 Mini FP8 | 2026-01 | 同上 | 256K | Apache 2.0 | 训练后量化版，面向 vLLM 高吞吐 |

## 架构要点

- 每个 Jamba block = 一个 attention 层或 Mamba 层 + 一个 FFN（Mini 变体中为 MoE）。
- 交错比例约为 **每 7 个 Mamba 层配 1 个 Transformer 注意力层**；Mini 规模中 MoE 路由每 2 个 block 一次，16 个专家。
- 注意力层用 GQA，KV cache 紧凑；Mamba 层保留选择性扫描机制。
- **256K 是原生支持的**：不靠位置插值外推，而是由 Mamba 的循环状态 + 局部窗口注意力共同决定有效上下文长度。

## 部署与语言

- 支持 9 种官方语言：英、西、法、葡、意、荷、德、阿拉伯、希伯来。
- 私有部署（VPC / 本地 / 混合）是核心卖点：模型厂商对数据零可见性，适合金融、医疗等受监管场景。
- Jamba2 Mini 已在 vLLM 0.12.0（INT8 专家量化）、HF Transformers、SGLang 上验证。

## 重点 model 文档

- [Jamba2](./Jamba2.md)

## ⚠️ 2026-05 重大转折

**2026-05-18，AI21 裁员超过 60%，并停止销售独立模型**，转向 **Maestro** Agent 平台。此后未再公布 Jamba 路线图，Jamba2 Large 也从未发布。

这意味着：
- Jamba 家族**可能不会再有后续代际**（截至 2026-09 无任何官方路线图）。
- 现有 checkpoint 仍在 Hugging Face 上，许可维持 Apache 2.0，可继续使用。
- 选型时需注意：AI21 已不再是"持续迭代的模型供应商"，而是 Agent 平台厂商。

## 备注

- **许可分歧要留意**：Jamba 1.5 / 1.6 / 1.7 用 Jamba Open Model License——组织及其关联方年营收超过 5000 万美元后不得主要用于商业获利，且衍生模型名称必须含 "Jamba"。而 v0.1、Reasoning 3B、Jamba2 是 Apache 2.0。别混为一谈。
- **Jamba2 发布日存在来源冲突**：aiwiki 记 2026-01-08，faun.dev 记 2026-01-06。本库并列记录。
- Jamba2 发布时**没有 Large 版本**，Jamba 1.5 Large 仍是家族最大的公开 checkpoint。
- Ollama 截至 2026-09 无 Jamba 条目。
