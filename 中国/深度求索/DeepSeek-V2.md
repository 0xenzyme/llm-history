---
厂商: 深度求索
系列: DeepSeek
模型: DeepSeek-V2
首个发布时间: 2024-05-06
最新版本: DeepSeek-V2（含 V2-Chat / V2-Lite）
参数量/架构: MoE，总参 236B，激活 21B；引入 MLA（多头潜在注意力）+ DeepSeekMoE
开源/闭源: 开源权重（MIT / 官方仓库）
数据来源: DeepSeek 官方、Hugging Face、Wikipedia
---

# DeepSeek-V2

## 基本信息
- 厂商：深度求索（DeepSeek）
- 类型：大语言模型（MoE），通用对话 / 代码
- 开源/闭源：开源权重（MIT）

## 发布时间线
- 2024-05-06：DeepSeek-V2 发布（含 V2、V2-Chat、V2-Lite / V2-Lite-Chat）

## 关键参数
- 总参数量：236B，激活 21B（每 token）
- 架构创新：
  - Multi-head Latent Attention（MLA）：压缩 KV Cache，大幅降低长上下文推理显存与成本
  - DeepSeekMoE：细粒度路由专家 + 共享专家
- 影响：API 定价极低，直接引发 2024 年中国大模型"价格战"

## 备注
- V2 是 DeepSeek 工程效率路线的奠基之作：MLA + MoE 组合让推理成本断崖式下降。
- 后续 V2.5（2024-09-05）合并 Chat 与 Coder 能力；Coder-V2（2024-06-17）在 V2 骨干上复兴代码线。
