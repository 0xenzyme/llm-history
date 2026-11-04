---
厂商: Meta（Meta AI / FAIR；前沿线为 Meta Superintelligence Labs, MSL）
地区: 国际（美国）
总部: 美国门洛帕克（Menlo Park）
定位: 开放权重生态最重要的种子（Llama 家族）；2026 前沿工作转向 Muse
开源/闭源: Llama 开放权重（Llama 社区许可）；Muse 双轨（Spark 闭源 API / Glimmer Apache 2.0）
模型系列: Llama（开放权重基座）+ Muse（2026 独立前沿家族）
首个发布时间: 2023-02-24（LLaMA 1）
最新版本: Llama 4（2025-04-05）；前沿为 Muse Wonder / Wonder Full（2026-10-12/13），开源档为 Muse Spark Open 816B（2026-10-16）
数据来源: Meta 官方 ai.meta.com、Hugging Face、aiwiki、Artificial Analysis、llm-stats、雪球《全球大模型跟踪》(10.15)、The Neuron (10.16)
状态: 已完善（含 2026-10 最新 Muse Wonder / Muse Spark Open）
---


# Meta（Llama）

## 概览
Llama 是 Meta 的开放权重基座模型家族，是整个开源/开放权重生态最重要的种子——Llama 1 证明了"可用基座权重能催生外部生态"，Llama 2 带来商用许可，Llama 3.x 成为推理引擎/量化/适配器广泛优化的事实基线，Llama 4 则由 Dense 转向 **MoE + 原生多模态**。

## 版本演进表

### Llama 主线
| 模型 | 发布 | 尺寸 | 关键变化 |
|---|---|---|---|
| LLaMA 1 | 2023-02-24 | 7B / 13B / 33B / 65B（另有 32.5B 记法） | 研究用途非商用许可；权重后遭泄露，客观上加速开源生态 |
| Llama 2 | 2023-07-18 | 7B / 13B / 70B | **商用许可**（与微软合作），4K 上下文；首个适合广泛商用部署的 Llama |
| Code Llama | 2023-08-24 | 7B / 13B / 34B（70B 于 2024-01-29 追加） | 代码专用衍生 |
| Llama 3 | 2024-04-18 | 8B / 70B | 8K 上下文；指令遵循/多语/上下文全面提升 |
| Llama 3.1 | 2024-07-23 | 8B / 70B / 405B | **128K 上下文 + 405B**，当时最大可公开下载模型 |
| Llama 3.2 | 2024-09-25 | 1B / 3B 文本；11B / 90B 视觉 | **首个原生多模态 Llama**，并下探端侧小模型 |
| Llama 3.3 | 2024-12-06（另有 12-04 记法） | 70B | 以远低成本在多任务上匹配 405B 质量 |
| Llama 4 Scout | 2025-04-05 | 17B 激活 / 109B 总，16 专家 | **10M** token 上下文（官方最大值声明），原生多模态 |
| Llama 4 Maverick | 2025-04-05 | 17B 激活 / 400B 总，128 专家 | **1M** token 上下文，原生多模态 |
| Llama 4 Behemoth | 未发布 | 288B 激活 / ~2T 总，16 专家 | 仅预览，作教师模型蒸馏用；**从未发布**，Meta 未正式宣布取消 |

### Muse 前沿线（2026 新增独立家族，详见 [Muse.md](./Muse.md)）
Meta 自 2025-04 起未再发布新的开放权重 Llama 代，前沿工作全部转入 **Muse** 家族（Meta Superintelligence Labs 主导）：

| 模型 / 产品 | 发布日期 | 定位 |
|---|---|---|
| Muse Spark 1.0 → 1.3 | 2026-04-08 → 2026-09-02 | 闭源前沿旗舰（API-only） |
| Muse Code | 2026-08-05 | 终端编码智能体 |
| Muse Glimmer | 2026-08-10 | Apache 2.0，30B 开放权重本地智能体 |
| Muse（个人智能体 App） | 2026-09-08 | 消费级 Agent 产品 |

> Muse **不是 Llama 变体，而是独立家族**：需要 Hub/微调生态选 Llama；需要本地小体积智能体选 Glimmer；需要 Meta 付费前沿 API 选 Spark。完整时间线、规格、战略解读与争议见 **[Muse.md](./Muse.md)**。

## 关键里程碑
- 2023-02-24 LLaMA 1 发布（研究许可），权重泄露反而引爆开源生态
- 2023-07-18 Llama 2 带商用许可，开放权重商业化里程碑
- 2024-07-23 Llama 3.1 405B + 128K，成为当时最大开放权重模型
- 2025-04-05 Llama 4，MoE + 原生多模态；Behemoth 承诺后未发布
- 2026-04-08 Meta 前沿工作转向 **Muse** 独立家族（Spark 闭源 / Glimmer 开放端侧），Llama 线自此停滞

## 重点 model 文档
- [Llama-1](./Llama-1.md)
- [Llama-2](./Llama-2.md)
- [Llama-3.1](./Llama-3.1.md)
- [Llama-4](./Llama-4.md)

## 备注
- **许可**：Llama 社区许可，多数商用免费；月活跃用户超过 7 亿的公司需额外授权。
- **停滞事实**：截至 2026-08，Meta 自 2025-04 起**未再发布新的开放权重 Llama 代**（约 18 个月）；Hugging Face `meta-llama` 组织最新仍是 Llama 4，llama.com 已重定向至开发者站而非模型目录。
- **Llama 4 争议**：独立测试者发现实际部署的 Scout/Maverick 与 Meta 提交 LMArena 的版本（未发布的 `Llama-4-Maverick-03-26-Experimental`）行为不一致；Meta 生成式 AI VP Ahmad Al-Dahle 于 2025-04-07 否认在测试集上训练。2026-01 LeCun 宣布离职后向《金融时报》承认研究人员"fudged a little bit"——在不同基准上报告不同 Llama 4 变体的结果并合并呈现。
- **日期/规格冲突**：Llama 3.3 有 12-04（GitHub llama-models）与 12-06（aiwiki）两种记法；LLaMA 1 尺寸有 33B / 32.5B 记法差异。
- 上下文标注如 10M / 1M 为模型最大声明值，不代表任何服务栈都能经济准确地处理该长度。
- 来源：Meta 官方 llama-models（GitHub）、aiwiki（meta_ai）、benched.ai、dataaihub。
