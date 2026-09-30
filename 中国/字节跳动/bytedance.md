---
厂商: 字节跳动（ByteDance）· Seed 团队
地区: 中国
总部: 中国北京
成立: Seed 团队 2023-01 成立
定位: C 端月活第一（豆包）+ 自研 Seed 基座，多模态与 Agent 并重
开源/闭源: 闭源为主；Seed-OSS / Seed-Coder 等部分开源（Apache-2.0）
模型系列: 豆包 / Seed（单系列；含 Seedance 视频、Seedream 图像分支）
首个发布时间: 2024-05-15（豆包大模型 1.0）
最新版本: Seed2.1（2026-06-23，Pro / Turbo）
数据来源: 字节 Seed 官方 seed.bytedance.com、火山引擎、长江证券研报、aiwiki、toutiao、datalearner
状态: 已完善（含 2026-06 最新 Seed2.1）
---


# 字节跳动（豆包 / Seed）

## 公司信息
- 厂商：字节跳动（ByteDance）
- AI 研究主体：Seed 团队（2023-01 成立，朱文佳负责；2025-02 前 Google DeepMind 吴永辉加入任基础研究负责人）
- 对外品牌：豆包（C 端 AI 助手）、火山引擎（B 端模型服务）
- 定位：国民级全能 AI，C 端月活领先；"饱和式打法"
- 开源策略：闭源为主，2025-08 起陆续开源 Seed-OSS、Seed-Coder 等（Apache-2.0）

## 语言模型主线（Doubao-Seed）
| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| 豆包大模型 1.0 | 2024-05-15 | 初代商用底座，32K | 否 | 首批算法备案，"比行业低 99%" 定价切入企业市场 |
| 豆包 1.5 / Seed1.5 (Doubao-1.5-pro) | 2025-01-22 | 32K 输入 / 12K 输出 | 否 | 深度思考模式 |
| Seed-Thinking-v1.5 | 2025-04-14 | 思考模型 | 否 | 4-17 API 上线，AIME 2024 86.7 / GPQA 77.3 |
| Seed1.5-VL | 2025-05-13 | 视觉语言，532M 视觉编码 + 20B active MoE | 否 | 38/60 公开基准 SOTA |
| 豆包 1.6 / Seed1.6 | 2025-06-11 | 256K，含 1.6 / 1.6-thinking / 1.6-flash | 否 | 国内首个 256K 思考模型；自适应思考 |
| Seed Diffusion Preview | 2025-07-31 | 扩散语言模型 | 否 | 2146 tokens/s，约 AR 基线 5.4× |
| Seed-OSS-36B | 2025-08-20 | 开源，36B，512K 上下文 | 是（Apache-2.0） | 可配置推理预算，~12T tokens |
| 豆包 1.8 / Seed1.8 | 2025-12-17 | 256K，多模态 Agent | 否 | 视频理解 1280 帧，Agent 全球第一梯队 |
| Seed2.0 / Doubao Seed 2.0 | 2026-02-14 | 万亿参数级多模态底座 | 否 | 四款 Pro/Lite/Mini/Code，首次跨代大版本 |
| Seed2.1 / Doubao-Seed-2.1 Pro & Turbo | 2026-06-23 | Pro 万亿参数 Gemini 式多模态 | 否 | Coding/Agent/VLM 质变；定价为 GPT-5.2 约 1/4 |

## 多模态线（图像 / 视频 / 语音 / 代码）
- 视频生成 Seedance：1.0 pro（2025-06）→ 2.0（2026-02-12，统一多模态，15s 音视频，AA 双榜第一）→ 2.5（2026-07-31）
- 图像生成 Seedream：3（2025-12）→ 4（2026-02，2K / High Res）→ 5.0 Lite（2026-04-01）
- 代码 / 语音：Seed-Coder（2025-05 开源）、Stable-DiffCoder-8B（2026-01 开源）、Seed-TTS

## 关键里程碑
- 2023-01：组建 Seed 团队；2023-08 上线豆包（云雀大模型公测）
- 2024-05-15：豆包大模型 1.0 商用发布（算法备案，低价切入）
- 2025-06-11：豆包 1.6，国内首个 256K 思考模型
- 2025-08-20：Seed-OSS-36B 开源（512K 上下文）
- 2026-02-14：Seed2.0 首次跨代大版本（万亿参数）
- 2026-06-23：Seed2.1 发布，Coding/Agent/VLM 生产级质变

## 重点 model 文档
- [Seed2.1](./Seed2.1.md)
- [Seed1.6（豆包 1.6）](./Seed1.6.md)
- [Seed-OSS-36B](./Seed-OSS-36B.md)
