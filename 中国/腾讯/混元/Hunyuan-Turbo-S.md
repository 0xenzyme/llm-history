---
厂商: 腾讯
系列: 混元
模型: Hunyuan-Turbo-S
首个发布时间: 2025-02-27
最新版本: hunyuan-turbos-latest（动态最新版，2025-03-13 起）
最新版本发布时间: 2025-02-27
参数量/架构: Hybrid-Mamba-Transformer 融合 MoE，总参 560B，激活 56B；输入 32K / 输出 16K
开源/闭源: 闭源（腾讯云 API + 元宝）
数据来源: 腾讯 2025-02-27 发布、腾讯云官网、百度百科
---

# Hunyuan-Turbo-S

## 基本信息
- 厂商：腾讯
- 系列：混元
- 类型：快思考（fast-thinking）大语言模型
- 开源/闭源：闭源

## 发布时间线
- 正式发布：2025-02-27（腾讯云上架 API）
- 2025-03-01 元宝灰度上线
- 2025-03-13 推出动态最新版 hunyuan-turbos-latest

## 关键参数
- 架构：业界首次大规模将 Mamba 无损应用于超大型 MoE（Hybrid-Mamba-Transformer）
- 总参数量：560B，激活 56B
- 上下文：最大输入 32K、输出 16K
- 特点：秒回，吐字速度 ×2，首字时延降低 44%；自适应长短思维链（Adaptive Long-short CoT）

## 定位
- 腾讯混元系列衍生模型的核心基座，为推理 / 长文 / 代码等衍生模型提供基础能力
- 基于 Turbo S 推出深度推理模型 T1、视觉深度推理 T1-Vision、语音模型 混元 Voice

## 评测
- LMSYS Chatbot Arena 全球第 7（1356 分）
- 23 个自动基准平均 77.9%，对标 DeepSeek-V3 / GPT-4o / Claude 3.5

## 备注
- 定价：输入 0.8 元 / 百万 tokens，输出 2 元 / 百万 tokens（发布时 API 限时免费）
