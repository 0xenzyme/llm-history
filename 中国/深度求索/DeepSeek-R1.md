---
厂商: 深度求索
系列: DeepSeek
模型: DeepSeek-R1
首个发布时间: 2025-01-20（正式版）
最新版本: DeepSeek-R1（含 R1-0528、蒸馏模型）
参数量/架构: MoE，671B（基于 V3-Base）；推理模型，GRPO
开源/闭源: 开源权重（MIT）
数据来源: DeepSeek 官方、Hugging Face、Wikipedia
---

# DeepSeek-R1

## 基本信息
- 厂商：深度求索
- 类型：强推理大语言模型（Reasoning）
- 开源/闭源：开源权重（MIT）

## 发布时间线
- 2024-11-20：DeepSeek-R1-Lite-Preview（预览，仅 API / 对话界面）
- 2025-01-20：DeepSeek-R1 正式版发布（含 R1-Zero 与 R1；被舆论称为 AI 界 "Sputnik moment"）
- 2025-05-28：DeepSeek-R1-0528 更新（更强推理，MIT）

## 关键参数
- 总参数量：671B（与 V3 同架构，从 V3-Base 初始化）
- 训练方法：以 GRPO（Group Relative Policy Optimization，源自 DeepSeekMath）为主的多阶段强化学习
- 蒸馏：提供从 R1 / R1-Zero 合成数据蒸馏的 1.5B–70B 小模型（基于 Qwen、Llama 等）

## 备注
- R1 首次证明"纯强化学习驱动推理"可逼近 o1 水平，且完全开源，引发全球关注。
- R1 是 DeepSeek 从"性价比"转向"推理能力"的标志性节点。
