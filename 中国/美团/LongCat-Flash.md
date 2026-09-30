---
厂商: 美团
系列: LongCat
模型: LongCat-Flash 系列（Chat / Thinking / Omni / Lite）
首个发布时间: 2025-09-01
最新版本: LongCat-Flash-Lite（2026-02-10）／LongCat-Flash-Omni（2025-11）
参数量/架构: **ScMoE（Shortcut-Connected MoE）+ 零计算专家**；主线 560B 总 / ~27B 激活（动态 18.6B–31.3B）；Lite 为 68.5B、激活 2.9B–4.5B
上下文/模态: 128K（Omni 支持 8 分钟以上连续音视频会话）；Omni 为全模态（文本 / 图像 / 音频 / 视频）
定价: API 按量计费；权重开源可自建
开源/闭源: **开源（MIT）**；Hugging Face 与 GitHub 同步发布
数据来源: longcatai.org 官方模型页、美团技术团队博客、CSDN 美团技术团队号、besthub 综述（截至 2026-09-30）
---

# LongCat-Flash

## 基本信息

**2025-09-01**，美团正式推出 **LongCat-Flash 系列**并开源 LongCat-Flash-Chat 与 LongCat-Flash-Thinking 两个版本。这是美团**首个开源大模型**：**5600 亿总参数、约 270 亿激活**（动态范围 18.6B–31.3B），**128K 上下文**，MIT 协议，经 SGLang 部署，训练使用英伟达 H800。

核心架构 **ScMoE（Shortcut-Connected MoE）** 配零计算专家——这一套设计后来被 LongCat-2.0 完整继承。

## 家族成员

| 版本 | 时间 | 规格 | 定位 |
|---|---|---|---|
| LongCat-Flash-Chat | 2025-09 | 560B / 27B | 对话通用版 |
| LongCat-Flash-Thinking | 2025-09 | 560B / 27B | 推理增强版 |
| **LongCat-Flash-Omni** | 2025-11 | 560B / 27B | **首个开源实时全模态交互模型** |
| LongCat-Flash-Thinking-2601 | 2026-01 | 560B 级 | 强泛化智能体模型，发布技术报告 |
| **LongCat-Flash-Lite** | 2026-02-10 | 68.5B，激活 2.9B–4.5B | N-gram Embedding 嵌入扩展，轻量高效 |
| LongCat-Flash-Prover | 2026-04-07 | — | 数学形式化与定理证明 |

## LongCat-Flash-Omni（2025-11）

在 ScMoE 骨干之上集成高效多模态感知与语音重建模块，成为**业内首个"全模态覆盖 + 端到端架构 + 大参数量高效推理"三者合一的开源大语言模型**：

- **端到端**：视觉与音频编码器作为感知前端，LLM 直接处理输入并生成文本 / 语音 token，轻量音频解码器重建自然语音波形；各 codec 约 0.6B，全模块为流式推理优化。
- **长时会话**：128K 上下文 + **8 分钟以上**连续音视频交互；块状音视频特征交错机制。
- **渐进式早期多模态融合**（6 阶段）：文本预训练 → 语音对齐 → 图文对齐 → 视频时空 → 上下文扩到 128K → 音频编码器再对齐。
- **成绩**：Omni-Bench、WorldSense 等全模态基准开源 SOTA；RealWorldQA **74.8**（接近 Gemini-2.5-Pro、高于 Qwen3-Omni）；视频转文本 SOTA；跨模态表现优于 Gemini-2.5-Flash（非思考）、与 Gemini-2.5-Pro（非思考）持平。
- **体验评测**：250 名用户定量评分 + 10 位专家 200 段对话定性分析，自然度与流畅度超过最佳开源模型 0.56 分。

## LongCat-Flash-Lite（2026-02-10）

**685 亿参数、每次推理仅激活 29 亿–45 亿**的轻量化 MoE 模型，采用 **N-gram Embedding** 嵌入扩展新范式——把**超过 300 亿参数**高效用于嵌入层，超越参数量等效的 MoE 基线，在智能体与代码领域表现突出。该嵌入扩展思路后续被 LongCat-2.0 放大到 135B 参数规模。

## 代际意义

- **美团的开源起点**：560B + MIT 一举把美团放进开源大模型第一梯队，也验证了 ScMoE 与零计算专家这套效率架构。
- **全模态开源 SOTA**：Omni 在 2025 年底首次让开源模型在全模态交互上对标闭源，是后来 LongCat-Next、LongCat-2.5-Preview 多模态路线的前置实验。
- **嵌入扩展的技术传承**：Lite 的 N-gram Embedding → 2.0 的 135B N-gram Embedding，是同一思路的尺度放大，属于美团少见的原创架构贡献。

## 备注

- **硬件口径**：LongCat-Flash 系列训练使用**英伟达 H800**；LongCat-2.0 才转为纯国产算力，不要把两代混称为"全国产"。
- **激活参数口径**：27B 为平均/典型值，官方同时给出 18.6B–31.3B 的动态范围，引用时应注明其一。
- **上下文**：全系 128K；与 LongCat-2.0 的原生 1M 不是一个量级。
- 来源：longcatai.org 官方模型页、美团技术团队博客、CSDN 美团技术团队号、besthub 综述。截至 2026-09-30。
