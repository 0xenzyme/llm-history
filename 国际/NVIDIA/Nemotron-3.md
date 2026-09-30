---
厂商: NVIDIA
系列: Nemotron
模型: Nemotron 3
首个发布时间: 2025-12-15（Nano 首发）
最新版本: Nemotron 3 Ultra（2026-06-04）
参数量/架构: 混合 Mamba-Transformer + 稀疏 MoE；Nano 31.6B/3.2B、Super 120.6B/12.7B、Ultra 550B/55B；全系 1M 上下文
开源/闭源: 开放权重（NVIDIA Open Model License）
数据来源: aiwiki(nemotron_3)、NVIDIA 官方新闻与 research.nvidia.com、arXiv、路透/Wired 报道
状态: 已完善
---

# Nemotron 3

## 一句话

NVIDIA 从"硬件供应商"跨到"模型开发者"的那一代：混合 Mamba-Transformer 骨干加稀疏 MoE，面向 **Agentic AI** 而非聊天，并首次承诺权重、训练数据、配方三者全开放。

## 发布时间线

- **2025-12-15**：Nemotron 3 Nano 发布（BF16 与 FP8 两种精度），同日公布家族规划与 3T tokens 数据发布。
- 2026-03-11：Nemotron 3 Super 发布（技术报告同月发布）。
- 2026-04-28：Nemotron 3 Nano Omni 发布（加音频与视觉编码器）。
- 2026-06-04：Nemotron 3 Ultra 发布。
- 2026-03（同期）：NVIDIA 宣布成立 **Nemotron Coalition**，多家实验室协作开发开放前沿模型。

## 规格

| 模型 | 总参数 | 激活参数 | 上下文 | 发布 |
|---|---|---|---|---|
| Nemotron 3 Nano | 30B（含嵌入 31.6B） | 3.5B（不含嵌入 3.2B） | 1M | 2025-12-15 |
| Nemotron 3 Super | 120.6B | 12.7B | 1M | 2026-03-11 |
| Nemotron 3 Ultra | 约 550B | 55B | 1M | 2026-06-04 |
| Nemotron 3 Nano Omni | 30B + 编码器 | 3B | 256K | 2026-04-28 |

命名约定：`30B-A3B` 表示每次前向传播激活约 30 亿参数。

## 架构

三个文本模型共享同一套**混合 Mamba-Transformer MoE 骨干**与同一 tokenizer：

- Mamba 状态空间层负责线性时间序列处理，避免注意力的平方级开销
- Transformer 注意力层保留局部建模能力
- MoE 层（自 Nemotron 3 起加入稀疏路由）在总参数池与激活计算之间解耦

这是 Nemotron-H（2025-03）与 Nemotron Nano 2（2025-08）两条混合架构路线的直接延续。

## 定位：为 Agent 而生

NVIDIA 明确把 Nemotron 3 定位为 agentic 而非 chat：显式支持工具调用、结构化输出与推理轨迹生成。发布时的早期企业伙伴包括 Accenture、Cadence、CrowdStrike、Cursor、Deloitte、EY、Oracle、Palantir、Perplexity、ServiceNow、Siemens、Synopsys、Zoom。

## 备注

- **开放的不只是权重**：NVIDIA 同时提供训练数据与训练配方，这在开放模型阵营里是少见的完整度——但预训练语料的许可是"可撤销、仅限训练"，不是真正的开放数据集（详见厂商页备注）。
- Nemotron 3 Nano 是 2025-12 发布时**唯一可下载**的文本模型；Super 与 Ultra 按规划延至 2026 年。
- Nemotron Coalition（2026-03）被报道为 Nemotron 4 的铺垫，但截至 2026-09 仍属前瞻计划，不作为既成事实记录。
