---
厂商: Mistral AI
地区: 国际（法国）
总部: 法国巴黎
成立: 2023 年
定位: 欧洲最重要的前沿厂商：高效开放权重 + 欧洲主权 AI（GDPR 合规、可私有化部署）
开源/闭源: 双轨——开放权重（Apache 2.0 为主）+ 专有 API / 商用许可
模型系列: Mistral 通用 / Mixtral MoE / Codestral-Devstral 代码 / Magistral 推理 / Pixtral-Voxtral 多模态 / OCR
首个发布时间: 2023-09-27（Mistral 7B）
最新版本: Mistral OCR 4（2026-06-23）；通用前沿为 Mistral Medium 3.5（2026-04-30）
数据来源: mistral.ai 官方模型治理页（legal.mistral.ai，41 模型）、aiwiki、llm-evolution、benched.ai
状态: 已完善（含 2026-06 最新 OCR 4）
---


# Mistral AI

## 概览
Mistral AI 是欧洲最重要的前沿模型厂商，定位"高效开放权重 + 欧洲主权 AI"（GDPR 合规、可私有化部署）。策略为**双轨**：开放权重线驱动社区与技术信誉，专有 API 线面向企业变现。发布节奏极快——2026-03-16 至 03-31 的 15 天内连发 6 款产品（约 2.5 天一款）。

## 版本演进表（主线 + 各支线）

### 通用语言线
| 模型 | 发布 | 备注 |
|---|---|---|
| Mistral 7B | 2023-09-27 | 首发，Apache 2.0，**BitTorrent 磁力链发布**（无新闻稿）；7.3B，全面超越 Llama 2 13B |
| Mistral Next | 2024-02-06 | 官方模型治理页在列 |
| Mistral Small 1.0 | 2024-02-26 | 与 Large 1.0 同日 |
| **Mistral Large 1.0** | 2024-02-26 | ~123B，**首个专有 API-only 模型**；同发 Le Chat + 微软 Azure 合作 |
| Mistral Large 2.0 / 2.1 | 2024-07-16（另有 07-24 记法） | 128K 上下文 |
| Mistral NeMo 12B | 2024-07-18（官方页写 2025，见备注） | 12B，128K，与 NVIDIA 合作 |
| Mistral Small 2.0 | 2024-09-17 | |
| Mistral Small 3.0 | 2025-01-30 | 24B，Apache 2.0 |
| Mistral Saba | 2025-02-17 | 24B，多语言（中东/南亚方向） |
| Mistral Small 3.1 | 2025-03-17 | 24B，128K，多模态 |
| Mistral Medium 3 | 2025-05-07 | 专有 |
| Mistral Small 3.2 | 2025-06-20 | 24B |
| **Mistral Large 3** | 2025-12-02（另有 11-20 记法） | 前沿档，**开放权重**，256K |
| Ministral 3（3B / 8B / 14B） | 2025-12-02 | 端侧小模型 |
| Mistral Small 4 | 2026-03-16 | |
| Mistral Medium 3.5 | 2026-04-30 | 专有，当前通用前沿之一 |

### MoE 线（Mixtral）
| Mixtral 8x7B | 2023-12-11 | 46.7B 总 / 12.9B 激活，Apache 2.0；每层 8 专家选 2；超 Llama 2 70B 且推理快约 6× |
| Mixtral 8x22B | 2024-04-10（官方页 04-17） | 141B 总 / 39B 激活，64K 上下文，编码/数学强 |

### 代码线
| Codestral | 2024-05-29 | 22B |
| Codestral Mamba | 2024-07 | Mamba 架构 |
| Codestral 25.01 | 2025-01-13 | 22B，256K |
| Codestral 2508 | 2025-07 | |
| Devstral Small 1 / Medium 1 | 2025-07-10（Devstral 另记 2025-05-21） | 智能体编码 |
| Devstral 2 / Devstral Small 2 | 2025-12-09 | |
| Leanstral | 2026-03-16 | |

### 数学 / 推理线
| Mathstral 7B | 2024-07-16 | 数学专用 |
| Magistral Small 1 | 2025-06-10 | 推理，开放权重 |
| Magistral Medium 1 | 2025-06-10 | 推理，专有 |

### 多模态 / 语音线
| Pixtral 12B | 2024-09-11 | 视觉，Apache 2.0 |
| Pixtral Large | 2024-11-18（另有 11-12 记法） | 124B，专有 |
| Mistral OCR | 2025-05-22（aiwiki 记 2025-03） | OCR 专用 |
| Voxtral Small / Mini | 2025-07-16 | 语音理解 |
| Mistral OCR 3 | 2025-12-15（aiwiki 记 12-19） | |
| Voxtral Transcribe 2（Mini / Realtime） | 2026-02 | |
| Voxtral TTS | 2026-03-26 | 语音合成 |
| **Mistral OCR 4** | 2026-06-23 | 官方模型治理页所列最新 |

### 其他
| Mistral Embed | 2023-12-11 | 嵌入模型 |
| Mistral Medium 1 | 2023-12-11 | 早期专有档 |
| Mistral Moderation | 2024-11-06 | 内容审核 |

## 关键里程碑
- 2023-09-27 Mistral 7B 发布（BT 种子、Apache 2.0），以 7B 超越 Llama 2 13B
- 2023-12-11 **Mixtral 8x7B**，开放权重 MoE 里程碑
- 2024-02-26 Mistral Large，转向专有 API + Le Chat + Azure
- 2025-06-10 Magistral，推理线独立成军
- 2025-12-02 **Mistral Large 3**（开放权重前沿）+ Ministral 3 端侧三档
- 2026-06-23 Mistral OCR 4（官方所列最新之一）

## 系列页与重点 model 文档
- [Mistral 系列（通用语言线）](./Mistral/index.md)
- [Mixtral 系列（MoE 线）](./Mixtral/index.md)
- [Mistral-7B](./Mistral/Mistral-7B.md)
- [Mistral-Large](./Mistral/Mistral-Large.md)
- [Mistral-Large-3](./Mistral/Mistral-Large-3.md)
- [Mixtral-8x7B](./Mixtral/Mixtral-8x7B.md)

## 备注
- **双轨策略**：开放权重（Mistral 7B、Mixtral、Small 3、Saba、Devstral、Magistral Small、Large 3、Small 4、Voxtral 等）vs 专有/商用（Large 1/2、Medium 3/3.5、Magistral Medium、Pixtral Large）。
- **欧洲主权定位**：2026-06 Anthropic 对部分外籍人士暂停模型访问后，CEO Mensch 重申 Mistral 的存在意义是"让每个人都能用上最好的 AI，不受国家或企业的集中控制"。
- **日期冲突（以官方模型治理页优先，其余标注）**：Mistral NeMo（2024-07-18 vs 官方页 2025）、Mixtral 8x22B（04-10 vs 官方页 04-17）、Mistral Large 3（12-02 vs 11-20）、Mistral OCR 3（12-15 vs 12-19）、Pixtral Large（11-18 vs 11-12）、Mistral Large 2（07-16 vs 07-24）。
- 来源：mistral.ai 官方模型治理页（legal.mistral.ai/ai-governance/models，41 个模型）、aiwiki（mistral_ai）、llm-evolution、benched.ai。
