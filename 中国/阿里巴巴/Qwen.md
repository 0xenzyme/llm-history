---
厂商: 阿里巴巴集团（Alibaba Group）· 通义实验室（Tongyi Lab）
地区: 中国
总部: 中国杭州
定位: 企业级通用模型，开源生态最全（累计下载破 10 亿，衍生模型超 20 万）
开源/闭源: 以开放权重（Apache 2.0）为主；旗舰 Max 系列为闭源 API-only（双轨策略）
模型系列: Qwen / 通义千问（单系列；含 QwQ 推理、Coder、VL/Omni、Image、Wan 视频分支）
数据来源: 阿里官方 qwen.ai / 通义实验室、HuggingFace、ModelScope、scriptbyai Qwen Timeline、aiwiki、百度百科、科技日报
状态: 已完善（含 2026-09 最新 Qwen3.8 代际）
---

# 阿里巴巴（通义千问 / Qwen）

- 厂商：阿里巴巴集团（Alibaba Group）· 通义实验室（Tongyi Lab）
- 地区：中国
- 总部：中国杭州
- 定位：企业级通用模型、开源生态最全（累计下载破 10 亿，衍生模型超 20 万）
- 开源/闭源：以开放权重（Apache 2.0）为主；旗舰 Max 系列为闭源 API-only 服务（双轨策略）
- 模型系列：Qwen / 通义千问（单系列，model 文档直接放本目录）
- 数据来源：阿里官方 qwen.ai / 通义实验室、HuggingFace、ModelScope、scriptbyai Qwen Timeline、aiwiki、百度百科、科技日报
- 状态：已完善（含 2026-09 最新 Qwen3.8 代际）

## 语言模型主线版本演进（含代际跳跃）

| 版本 | 发布时间 | 参数/架构 | 开源 | 备注 |
|---|---|---|---|---|
| Qwen-7B / 14B | 2023-08 | 初代开源 | 是 | 通义千问品牌正式亮相 |
| Qwen-72B / 1.8B | 2023-11-30 | 扩展尺寸 | 是 | |
| Qwen1.5 | 2024-02-04 | 0.5B~72B | 是 | 繁中/多语言强化，首个 MoE 版 |
| Qwen2 | 2024-06-07 | 72B 旗舰 / 128K | 是 | 超越 LLaMA 3 70B |
| Qwen2.5 | 2024-09-19 | 含 Coder/Math/VL | 是（Apache 2.0） | 开源生态爆发，[详情](./Qwen2.5.md) |
| Qwen3 | 2025-04-28 | 235B-A22B MoE | 是 | /think / /no_think 思考模式，[详情](./Qwen3.md) |
| Qwen3-Max | 2025-09-24 | 万亿参数级 | 否（闭源） | 闭源旗舰 API-only，[详情](./Qwen3-Max.md) |
| Qwen3-Next | 2025-09-25 | 架构研究 | 部分 | 高度稀疏混合注意力，3.5 前身 |
| Qwen3.5 | 2026-02-16 | 397B-A17B 原生多模态 | 是 | Gated DeltaNet+MoE、262K，[详情](./Qwen3.5.md) |
| Qwen3.5 Small | 2026-03-02 | 0.8B~9B | 是 | 端侧系列，原生多模态 |
| Qwen3.5-Omni | 2026-03-30 | 全模态 | 是 | |
| Qwen3.6-35B-A3B | 2026-04-15 | 35B-A3B MoE 代码 | 是 | Agentic Coding 主线 |
| Qwen3.6-27B | 2026-04-22 | 27B Dense | 是 | 原生视觉语言 |
| Qwen3.6-Plus | 2026-04-02 | 闭源服务 | 否 | |
| Qwen3.6-Max-Preview | 2026-04-17 | 闭源 | 否 | |
| Qwen3.7-Max | 2026-05-20 | 闭源服务 | 否 | 最长 1M 上下文 |
| Qwen3.7-Plus | 2026-06-01 | 多模态输入 闭源 | 否 | |
| Qwen3.8-Max-Preview | 2026-07-20 | 2.4T 闭源预览 | 否 | 称将开源"soon" |
| Qwen3.8-Omni-Flash | 2026-09-18 | 全模态 | 是 | Agentic 全模态 |

## 分支 / 专项线

- **推理模型**：QwQ-32B-Preview（2024-11-28） → QwQ-32B（2025-03-06） → QVQ-Max（2025-03-28 视觉推理）
- **代码**：CodeQwen1.5（2024-04-16） → Qwen2.5-Coder 全系（2024-11-12） → Qwen3-Coder + Qwen Code（2025-07-22） → Qwen3-Coder-Next（2026-02-02）
- **视觉 / 全模态**：Qwen-VL（2023-08） → Qwen2-VL（2024-08-29） → Qwen2.5-VL（2025-01-26） → Qwen3-VL（2025-09-22） → Qwen3-Omni（2025-09-21） → Qwen3.5-Omni（2026-03-30） → Qwen3.8-Omni-Flash（2026-09-18）
- **图像生成（Qwen-Image）**：2025-08-04 开源 → Qwen-Image-2512（2025-12-31） → Qwen-Image-2.0（2026-02-10） → Qwen-Image-2.1（2026-09-20，7B 视觉组件，文生图+编辑统一）
- **视频（通义万相 Wan）**：Wan 正式发布（2023-07） → Wan2.1 开源（2025-02） → Wan2.2（2025-07） → Wan2.5-Preview（2025-09） → Wan2.6（2025-12） → Wan2.7-Image（2026-04-01） → Wan2.7-Video（2026-04-07）
- **语音（通义百聆 Tongyi Fun）**：Fun-ASR / Fun-CosyVoice（2025-09）
- **同传**：Qwen3.8-LiveTranslate（2026-09-18，Interleave 架构，LAAL 2.8s→2.3s）
- **检索 / 嵌入**：Qwen3-Embedding / Reranker（2025-06） → Qwen3-VL-Embedding / Reranker（2026-01-07）

## 关键里程碑

- 2023-08 初代 Qwen-7B 开源，通义千问品牌亮相。
- 2024-09 Qwen2.5 开源生态爆发（Coder/Math/VL 全系，Apache 2.0）。
- 2025-04 Qwen3 引入 /think / /no_think 思考模式 + MoE 主线。
- 2025-09 Qwen3-Max 万亿参数闭源旗舰；Qwen3-Omni 全模态开源。
- 2026-02 Qwen3.5 原生多模态 + Gated DeltaNet 架构革新（线性注意力+稀疏 MoE）。
- 2026-07~09 Qwen3.8：闭源 Max-Preview（2.4T）+ 全模态 Omni-Flash，双轨策略顶配。

## 重点 model 文档

- [Qwen2.5](./Qwen2.5.md)
- [Qwen3](./Qwen3.md)
- [Qwen3.5](./Qwen3.5.md)
- [Qwen3-Max](./Qwen3-Max.md)

## 备注

- Qwen 是单一系列家族（Qwen / 通义千问），按项目约定省略"系列层"，model 文档直接放本目录。
- 阿里采用"开放权重（3.5/3.6 家族）+ 闭源旗舰（3.7/3.8 Max）"双轨：开源覆盖 3.5/3.6，顶级 Max 仅 API 服务。
- 日期冲突处理：Qwen3.5 取 2026-02-16（科技日报/阿里官方除夕发布）；社区 PR 早在 2-09、部分外媒记 2-15，以国内权威为准。
