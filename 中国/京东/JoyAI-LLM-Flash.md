---
厂商: 京东
系列: JoyAI（原言犀）
模型: JoyAI-LLM-Flash
首个发布时间: 2026-02-14（Hugging Face 开源）
最新版本: JoyAI-LLM-Flash（截至 2026-09）
参数量/架构: **MoE，48B 总 / 3B 激活**；40 层（含 1 Dense 层）；256 专家、每 token 选 8 + 1 共享专家；MLA 注意力、SwiGLU、词表 129K
上下文/模态: **128K**；文本
定价: 开源权重（Modified MIT）+ 官方 API（兼容 OpenAI / Anthropic 接口）
开源/闭源: **开源（Modified MIT）**，权重与代码发布于 Hugging Face
数据来源: 凤凰网科技·IT之家（2026-02-15）、站长之家、CSDN《2026 年 2 月 AIGC 行业模型发布》、京东探索研究院（截至 2026-09-30）
---

# JoyAI-LLM-Flash

## 基本信息

**2026-02-14**，京东在 Hugging Face 平台开源 **JoyAI-LLM-Flash**：MoE 架构，**总参数 480 亿、激活参数 30 亿**，在 **20 万亿文本 token** 上完成预训练，定位中型指令语言模型，专为**工具使用、推理与自主问题解决**设计。同步提供官方 API 及 OpenAI / Anthropic 兼容接口。

## 架构与三项关键技术

| 项 | 数值 |
|---|---|
| 总参数 / 激活参数 | 48B / 3B |
| 层数 | 40（Dense 层 1） |
| 注意力隐藏维度 / MoE 隐藏维度 | 2048 / 768 |
| 多头注意力数 | 32 |
| 专家数 / 每 token 专家数 / 共享专家 | 256 / 8 / 1 |
| 词表 / 上下文 | 129K / 128K |
| 注意力 / 激活函数 | MLA / SwiGLU |

- **FiberPO（Fiber Bundle RL）**：把**纤维丛理论（fiber bundle theory）**引入强化学习，解决传统模型规模扩展时的训练不稳定问题。
- **Training-Inference Collaboration**：**Muon 优化器 + 稠密 MTP（Multi-Token Prediction）**，相比非 MTP 版本吞吐提升 **1.3×–1.7×**。
- **Agentic Intelligence**：强化推理与工具调用核心能力，后训练走 SFT → DPO → RL。

## 成绩（京东公布）

在 19 个权威基准上综合表现领先：

- 数学 **MATH 500：97.10**
- 编程 **HumanEval：96.34**
- Agentic **SWE-bench Verified：60.60**
- 长上下文 **RULER：95.60**
- 弱项：Tau2-Telecom 79.83，略低于 GLM-4.7-Flash 的 88.60

## 代际意义

- **京东开源路线的起点**：这是 JoyAI 品牌升级后第一个开源基座，标志京东从"模型自用 + 云上售卖"转向"开源换生态"。
- **中等体量的工程取向**：48B/3B 不是冲榜规格，而是为工具调用与自主解题这类真实业务负荷准备的性价比档位；128K 与 MLA 也都是面向成本的选型。
- **技术叙事的差异化**：把纤维丛理论引入 RL（FiberPO）是一次罕见的、有明确数学出处的方法论包装，与多数厂商"堆数据/堆专家"的叙事不同。

## 备注

- **协议**：Modified MIT License（非标准 MIT），商用前需确认具体条款。
- **成绩口径**：上述基准分数均为京东公布，无第三方独立复现。
- **命名**：JoyAI-LLM-Flash 属 JoyAI 品牌下的语言模型线，与 JoyAI-Image-Edit、JoyAI-VL-Interaction 并列，不要与 C 端"JoyAI App"混淆。
- 来源：凤凰网科技·IT之家（2026-02-15）、站长之家、CSDN 行业月报、京东探索研究院。截至 2026-09-30。
