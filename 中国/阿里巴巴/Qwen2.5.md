---
厂商: 阿里巴巴
系列: Qwen
模型: Qwen2.5
首个发布时间: 2024-09-19
最新版本: Qwen2.5 全系（含 Coder / Math / VL）
参数量/架构: Dense Transformer，0.5B~72B；RMSNorm + SwiGLU + GQA；2.5-Coder 引入细粒度 MoE
开源/闭源: 开放权重（Apache 2.0）
---

# Qwen2.5

Qwen2.5 是 Qwen 家族的"第二代半"，也是让 Qwen 成为全球开源生态最全模型家族的关键一代。

## 发布时间线

- 2024-09-19：Qwen2.5 基座全系发布（0.5B~72B 共 7 个尺寸），结构化输出、长生成、代码、数学、指令遵循全面提升。
- 2024-11-12：Qwen2.5-Coder 全系（0.5B~32B，代码 SOTA）。
- 2025-01-26：Qwen2.5-VL（文档/图表/长视频/视觉 Agent）。
- 2024-06 起陆续补齐 Math、Embedding 等专项。

## 关键事实

- **开源生态爆发点**：Qwen2.5 首次把"基座 + Coder + Math + VL"整合成协调的全家桶，并以 Apache 2.0 全量开源，奠定 Qwen 在 HuggingFace / ModelScope 的下载霸主地位（后续累计下载破 10 亿）。
- **架构**：延续 Decoder-only Transformer，RoPE + RMSNorm + SwiGLU + GQA；Coder 分支引入细粒度 MoE 设计。
- **语言覆盖**：多语言大幅扩展，为后续 Qwen3（119 语言）、Qwen3.5（201 语言）铺垫。

## 备注

- Qwen2.5 是 Qwen 从"单一对话模型"转向"覆盖全模态、全尺寸的开放模型平台"的分水岭。
- 与后继 Qwen3（MoE + 思考模式）、Qwen3.5（原生多模态 + Gated DeltaNet）相比，Qwen2.5 仍以纯文本预训练 Dense 为主，多模态依赖独立 VL checkpoint。
