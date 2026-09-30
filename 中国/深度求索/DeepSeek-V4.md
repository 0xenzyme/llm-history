---
厂商: 深度求索
系列: DeepSeek
模型: DeepSeek-V4（含 V4 Preview、V4-Flash、V4-Pro、V4.1-Flash）
首个发布时间: 2026-04-24（Preview）
最新版本: DeepSeek-V4.1-Flash（2026-09-10）
参数量/架构: Pro 1.6T/49B、Flash 284B/13B；Token-wise 压缩 + DSA（DeepSeek Sparse Attention）；1M 上下文
开源/闭源: 开源权重（MIT）
数据来源: DeepSeek 官方新闻、中国日报、Wikipedia、aireleasetracker、deepseek.ai
---

# DeepSeek-V4

## 基本信息
- 厂商：深度求索
- 类型：大语言模型（MoE），Agent / 长上下文 / 推理
- 开源/闭源：开源权重（MIT）

## 发布时间线（preview 先行 → 正式版跟进）
- 2026-04-24：DeepSeek-V4 Preview 发布并开源（Pro + Flash 双版本，1M 上下文默认，华为云首发适配）
- 2026-07-31：DeepSeek-V4-Flash 正式版（V4-Flash-0731）
- 2026-08-13：DeepSeek-V4-Pro 正式版（V4-Pro-0813，强化 Agent 能力、支持 Responses API 与 Codex 集成）
- 2026-09-10：DeepSeek-V4.1-Flash 发布（当前最新）

## 关键参数
- V4-Pro：总参 1.6T，激活 49B（text-only）
- V4-Flash：总参 284B，激活 13B（text-only）
- 上下文：1M tokens 默认（输出最高 384K）
- 架构创新：Token-wise 压缩 + DSA（DeepSeek Sparse Attention），极致长上下文效率
- 硬件：针对华为昇腾 950PR、寒武纪 MLU 优化（受 Nvidia 出口限制影响）

## 备注
- V4 延续"preview 先行、正式版跟进"策略（与腾讯 Hy4 类似）。
- 性价比极致：V4-Flash API 输入约 $0.15 / 输出约 $0.60 每百万 tokens（2026-09 验证），远低于同期 GPT / Claude 闭源旗舰。
- 2026-07-24 起，legacy 模型 ID（deepseek-chat / deepseek-reasoner）退役，全面切换至 V4 系列。
