---
厂商: MiniMax
系列: MiniMax
模型: MiniMax-01（Text-01 / VL-01）
首个发布时间: 2025-01（技术报告 arXiv:2501.08313，2025-01-14）
最新版本: MiniMax-01
参数量/架构: 456B 总参 / 45.9B 激活，80 层 Transformer，Lightning Attention（线性:softmax = 7:1），4M 上下文
开源/闭源: 开放权重
数据来源: MiniMax 官方、arXiv、benched.ai、IBM
---

# MiniMax-01

## 基本信息
- 发布时间：2025-01（技术报告 arXiv:2501.08313，2025-01-14）
- 类型：开源基础模型（文本 Text-01 + 视觉语言 VL-01）
- 定位：MiniMax 当前技术路线起点，Lightning Attention 商用规模首次落地

## 关键参数
- 参数：456B 总参 / 45.9B 激活，MoE
- 架构：80 层 Transformer，Lightning Attention（线性注意力与 softmax 注意力 7:1 配比）
- 上下文：最长 4M token（同期 GPT-4o / Claude 3.5 Sonnet 的 20~32×）
- 性能：标准基准对标 GPT-4o 与 Claude 3.5 Sonnet
- 许可：开放权重（GitHub: MiniMax-AI）

## 备注
- Lightning Attention 是 MiniMax 的核心架构创新，后续 M1 / M2 / M3 均延续并演进该路线（CISPO → MSA）。
- 取代早期闭源 abab 6.5 家族，开启开源权重主线。
