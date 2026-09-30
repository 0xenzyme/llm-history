---
厂商: Meta（Meta Superintelligence Labs, MSL）
系列: Muse
模型: Muse Glimmer
首个发布时间: 2026-08-10
最新版本: Muse Glimmer 30B（HF: `meta-models/Muse-Glimmer-30B`）
参数量/架构: Dense，约 29.6B（27.8B 语言模型 + ~1.8B ViT-G/14 视觉编码器）；52 层，隐藏维 6,656；上下文 131,072+
开源/闭源: **开放权重（Apache 2.0）**
---

# Muse Glimmer

## 基本信息
Muse Glimmer 于 **2026-08-10** 发布，是**从 Muse Spark 1.2 蒸馏**而来的 30B 密集模型，Apache 2.0 许可，专为**在单张消费级 GPU 上跑常驻本地智能体**设计。这是 Meta 自 **Llama 4（2025-04）以来首个开放权重发布**，且许可从"Llama 社区许可"改为 **Apache 2.0**（无月活/欧盟限制条款）。

## 架构与规格
| 项 | 值 |
|---|---|
| 总参数 | ~29.6B（27.8B LM + ~1.8B ViT-G/14 视觉编码器） |
| 层数 / 隐藏维 | 52 / 6,656 |
| 注意力 | [Local, Local, Local, Global] 循环；local 层 2048 token 滑动窗口 |
| 注意力头 | 32 query / 2 KV（16:1 GQA），head dim 128 |
| FFN | SwiGLU，中间维 19,968 |
| 词表 | 202,048（200K BPE + 2,048 特殊） |
| 上下文 | 131,072+ tokens |
| 知识截止 | **2026-01-04** |
| 模态 | 输入 文本 + 图像；输出 文本；100+ 语言 |
| 显存 | 全精度 >55GB；4-bit 量化 <20GB（适配 24 / 32GB 消费卡或 Apple Silicon） |

## 三阶段训练
1. **预训练**：对 Muse Spark 的输出做 **logit 蒸馏**，数据配比近似教师模型。
2. **中期训练**：更长上下文、智能体密集数据 + 更丰富的推理轨迹。
3. **后训练**：SFT + **on-policy 蒸馏** + 强化学习（覆盖通用/推理/编码/智能体域）。

## 关键成绩（Meta 自评，对标 Gemma4-31B / Qwen3.6-27B）
- 智能体：MCP Atlas **75.5**、DeepSearch QA **74.6**、OSWorld-Verified 65.9、τ³-Banking 23.5
- 编码：SWE-Bench Verified **76.0**、SWE-Bench Pro 51.2、TerminalBench 2.1 **51.7**（**落后** Qwen3.6 约 9 分）
- 多模态：Charxiv Reasoning 78.8、MMMU Pro 74、ScreenSpot Pro 75.4
- 长上下文：**AA-LCR 80.0**（vs Gemma4 68.3 / Qwen3.6 73.3）、Beam 128K 65.1
- 推理：AIME 2026 **94.7**、GPQA Diamond 83.5、HLE（纯文本无工具）22.0、IFBench 77.0

## 本地部署
- 运行时：Ollama、LM Studio、vLLM、SGLang、llama.cpp、MLX、ExecuTorch。
- **DFlash** 投机解码 drafter：RTX 5090 上 **3.1×**、Apple M5 Max 1.8×、M4 Max 1.5×；SGLang 团队在单张 RTX 5090（NVFP4 + DFlash）实测约 **230 tokens/秒**。

## 备注
- **不是"开源"而是"开放权重"**：仅发布权重与量化版本，训练数据与代码未公开。
- 独立复现仍待验证（Ars Technica 指出厂商图表仍是厂商图表）。
- 竞品 Qwen3.6-27B 在 Terminal-Bench 2.1、OSWorld-Verified 等更偏通用/命令行的场景领先。
- 来源：Meta Research Blog（introducing-muse-glimmer）、awesomeagents.ai、explainx.ai、fullstack.com、aimodelreport、TechCrunch/Bloomberg/CNBC/Ars Technica（2026-08-10）。
