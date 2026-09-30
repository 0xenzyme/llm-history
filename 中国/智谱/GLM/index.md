---
厂商: 智谱 AI
模型系列: GLM（General Language Model）
首个发布时间: 2022-08（GLM-130B）
最新版本: GLM-5.3（2026-08-14 发布，08-28 权重）
开源/闭源: 2025-04 起全面 MIT 开源（GLM-4-0414 系列起）；早期闭源 API 并存
数据来源: 智谱官方、百度百科、aiwiki、glm5.ai、ai-tldr
状态: 已完善（含 2026-08 最新 GLM-5.3 / 5.3-Flash）
---


# GLM 系列（语言模型主线）

## 版本演进（语言模型）

| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| GLM-130B | 2022-08 | 130B 双语基座 | 是 | ICLR 2023，匹配 GPT-3 |
| CodeGeeX | 2022-09-30 | 代码，23 语言 | 是 | HumanEval-X 基准 |
| ChatGLM（初代） | 2023-03-14 | ChatGLM-6B，6.2B | 是 | 首个开源中文对话，消费级 GPU，下载千万 |
| ChatGLM2-6B | 2023-06-25 | 6.2B，32K 上下文 | 是 | +42% 推理速度 |
| ChatGLM3-6B | 2023-10-27 | 6.2B | 是 | 函数调用 / 代码解释器 / Agent |
| GLM-4 | 2024-01-16 | 基座，128K | 部分 | 超 GLM-3 约 60%，All Tools，多模态 |
| GLM-4-9B / 4V-9B | 2024-06 | 9B | 是 | 开源，网页浏览 + 代码执行 |
| GLM-4-Plus | 2024-08 | 闭源 | 否 | GPT-4o 级 |
| GLM-4-32B-0414 / Z1-32B-0414 | 2025-04 | 32B | 是（MIT） | 推理模型，部分任务近 DeepSeek-R1 |
| GLM-4.5 / 4.5 Air | 2025-07-28 | 355B/32B active；Air 106B/12B | 是（MIT） | 开源 MoE 旗舰起点，23T tokens，64.2% SWE-bench V |
| GLM-4.5V | 2025-08 | 106B 视觉语言 | 是（MIT） | ~42 视觉基准 SOTA |
| GLM-4.6 | 2025-09-30 | 355B/32B active | 是（MIT） | 200K 上下文，Agentic coding |
| GLM-4.6V | 2025-12-09 | 106B / 9B Flash | 是 | 原生工具调用，GUI agents |
| GLM-4.7 | 2025-12-22 | 355B/32B active | 是（MIT） | 73.8% SWE-bench V，持久化思维，AA 开源第一（68 分） |
| GLM-5 | 2026-02-11 | 744B/40B active，256 专家 | 是（MIT） | 当前旗舰，DSA，200K，AA 综合开源第一 |
| GLM-5-Turbo | 2026-03-16 | 200K | 是 | 面向 OpenClaw 智能体，低价 |
| GLM-5.1 | 2026-04-08 | 744B/40B active | 是（MIT） | 长程 8 小时自主执行，SWE-Bench Pro SOTA |
| GLM-5.2 | 2026-06-13 | 744B/40B active | 是（MIT） | 1M 上下文，62.1 SWE-bench Pro，编程开源第一 |
| GLM-5.3 | 2026-08-14 发布 / 08-28 权重 | 同 5.2 基座 | 是（MIT） | Agentic coding + 网络安全 |
| [GLM-5.3-Flash](./GLM-5.3-Flash.md) | 2026-08-26 | 320B/18B active，45 层 | 是（MIT） | 原生多模态，混合线性 + 稀疏注意力，1M 上下文，AA 57（=Opus 4.8），国产算力首次大规模练兵 |

## 关键参数 / 架构
- 预训练范式：自回归空白填充（ABI），融合 BERT 理解与 GPT 生成
- MoE：sigmoid gates、GQA + 部分 RoPE、QK-norm、MTP（多 token 预测）
- GLM-5：78 层，256 专家（激活 8），稀疏度 5.9%，DSA（DeepSeek 稀疏注意力），28.5T tokens 预训练，全程华为昇腾训练

## 开源策略
- 2025-04 GLM-4-0414 系列起采用 MIT 许可，旗舰持续开源（Hugging Face: zai-org / 早期 THUDM）
- GLM-5 起完全华为昇腾硬件训练，强调国产算力全栈自主

## 重点 model 文档
- [GLM-4](./GLM-4.md)
- [GLM-4.5](./GLM-4.5.md)
- [GLM-5](./GLM-5.md)
- [GLM-5.3-Flash](./GLM-5.3-Flash.md)
