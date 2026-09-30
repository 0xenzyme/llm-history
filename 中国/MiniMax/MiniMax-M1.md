---
厂商: MiniMax
系列: MiniMax
模型: MiniMax-M1
首个发布时间: 2025-06（技术报告 arXiv:2506.13585，2025-06-16）
最新版本: MiniMax-M1
参数量/架构: 456B 总参（45.9B 激活），1M 上下文，Lightning Attention + MoE
开源/闭源: 开放权重（Apache 2.0）
数据来源: MiniMax 官方、arXiv、benched.ai、aiwiki
---

# MiniMax-M1

## 基本信息
- 发布时间：2025-06（技术报告 arXiv:2506.13585，2025-06-16）
- 类型：开源大规模混合注意力推理模型
- 定位：MiniMax 首个面向复杂推理的专项模型

## 关键参数
- 基座：由 MiniMax-Text-01 微调
- 参数：456B 总参（45.9B 激活），MoE
- 上下文：原生 1M token（号称 DeepSeek R1 的 8×）
- 算法：CISPO（推理优化算法）
- 效率：相比同级别模型推理计算降低约 75%
- 许可：Apache 2.0 开放权重

## 备注
- 被 MiniMax 描述为"全球首个开源大规模混合注意力推理模型"。
- 承接 MiniMax-01（2025-01，Lightning Attention 商用落地，4M 上下文）的架构路线。
