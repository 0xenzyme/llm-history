---
厂商: NVIDIA
地区: 国际
总部: 美国 加州 圣克拉拉
成立: 1993
定位: 从"卖铲子"到"自己也挖矿"——开放模型 + 训练数据 + 配方全量开放，服务 Agentic AI
开源/闭源: 开放权重（NVIDIA Open Model License；训练数据部分为可撤销的训练专用许可）
模型系列: Nemotron（dense → 混合 Mamba-Transformer → 混合 MoE）
数据来源: NVIDIA 官方 nemotron 页面与 llm-info、aiwiki(nemotron / nemotron_3)、systems-analysis、everybodywiki、arXiv(2406.11704、2504.03624、2508.14444)、NVIDIA 官方博客（2026-10-17）、雪球《全球大模型跟踪》(10.15)
状态: 已完善（含 2026-10 最新 Nemotron 3.5 Super VL / Bolt）
---

# NVIDIA Nemotron

Nemotron 的特别之处不在于跑分，而在于 NVIDIA 把**权重、训练数据、训练配方一并开放**——它的定位是"给整个生态做燃料"，而不是跟 OpenAI 抢聊天榜首。

## 代际主线

NVIDIA 自己的概括：**Nemotron 1 增强 Llama 的推理能力 → Nemotron 2 引入混合 Mamba-Transformer → Nemotron 3 在混合设计上加稀疏 MoE。**

## 版本演进表

| 世代 / 模型 | 发布 | 参数 | 说明 |
|---|---|---|---|
| Nemotron-3 8B | 2023-11 | 8B dense | 首个 Nemotron 品牌模型，3.8T tokens，53 语言 + 37 编程语言，4K 上下文 |
| Nemotron-4 15B | 2024-02 | 15B | 8T tokens，同尺寸多语言最强 |
| **Nemotron-4 340B** | 2024-06 | 340B dense（Base/Instruct/Reward） | 定位**合成数据生成器**；对齐数据 **98% 为合成生成**；引入 NVIDIA Open Model License |
| Minitron | 2024-07 | 4B / 8B | 剪枝 + 蒸馏压缩技术（ICLR 2025），后成为 Nemotron 标准压缩步骤 |
| Llama-3.1-Nemotron-70B-Instruct | 2024-10 | 70B | 基于 Llama 3.1 后训练 |
| Llama Nemotron（Nano/Super/Ultra） | CES 2025-01 公布，2025-03~04 发布 | 8B / 4B、49B、253B | 基于 Llama 3.x；部分是对 DeepSeek R1 等开放推理模型的回应 |
| **Nemotron-H** | 2025-03/04 | 8B / 47B / 56B | **首个 NVIDIA 自研混合 Mamba-2 + Transformer**；HF 的 `nemotron_h` 仍是 Nemotron 3/3.5 的 model_type |
| **Nemotron Nano 2** | 2025-08-18 | 9B（另有 12B v2） | 首个产品化的 NVIDIA 自研模型，从零训练，约 20T tokens |
| **Nemotron 3 Nano** | 2025-12-15 | 31.6B 总 / 3.2~3.5B 激活 | 1M 上下文，混合 Mamba-Transformer MoE，[详情](./Nemotron-3.md) |
| **Nemotron 3 Super** | 2026-03-11 | 120.6B 总 / 12.7B 激活 | 1M 上下文 |
| **Nemotron 3 Nano Omni** | 2026-04-28 | 30B 级骨干 + 音频/视觉编码器，3B 激活 | 256K 上下文 |
| **Nemotron 3 Ultra** | 2026-06-04 | 约 550B 总 / 55B 激活 | 1M 上下文，家族最强 |
| Nemotron-Labs-3-Puzzle | 2026-07 | 75.3B 总 / 9.3B 激活 | 研究线 |
| Nemotron-Labs-Diffusion | 2026-07 | 3B / 8B / 14B | 扩散研究线 |
| Nemotron 3.5 Lightning | 2026-08 | 30B MoE / 3B 激活 | 常驻 Agent 的执行模型，配 NeMo Switchyard 路由器 |
| Nemotron-3-Ultra-CC | 2026-09 | — | 竞赛系统，IOI 2026 非官方实跑 535.4/600 |
| **Nemotron 3.5 Super VL** | **2026-10-17** | 120B 总 / 12B 激活 | 面向常驻 Agent 的开放多模态模型，可跨文本/图像/文档/视频推理并调用工具；官方称同类最快（约 5× 吞吐）。许可 OpenMDW-1.1 |
| **Nemotron 3.5 Bolt 74B-A9B（24GB）** | 2026-10-17 | 74B 总 / 9B 激活 | 端侧：原生 2-bit 量化塞进 24GB，可在 RTX / DGX Spark 本地跑 Agent 任务；PinchBench 同类开源第一、BrowseComp 开源第二 |
| **Nemotron 3.5 Bolt E4B（4GB）** | 2026-10-23（预告） | 4B 级 | 面向 GeForce RTX / Jetson / DGX Spark 的对话与物理 Agent；截至 2026-10-22 待发布 |

> 家族分工（官方口径）：**Lightning**（2026-08）= 高吞吐；**Ultra** = 最难推理任务；**Super VL** = 多模态常驻 Agent；**Bolt** = 边缘与本地。

## 近一月动态（2026-09-22 → 2026-10-22）

| 日期 | 事件 |
|---|---|
| 10-08 | 发布桌面 AI 超算 **DGX Station for Windows**（GB300 Grace Blackwell Ultra，统一内存最高 748GB，可承载约 1 万亿参数模型），计划四季度上市；RTX Spark 定档 10-07，DGX Spark 64GB 版 10-23 发售 |
| 10-17 | **Nemotron 3.5 Super VL ＋ Bolt 74B-A9B** 发布；Bolt E4B 定档 10-23 |
| 10 月中 | 黄仁勋欧洲行：追加约 20 亿美元投资欧洲 AI 生态与开源技术，直接注资四家法国初创（Doctolib、Pigment、Entalpic、Genesis AI）；GTC Berlin 10-20–22 举行 |
| 10 月 | 据《金融时报》，正洽谈**投资或收购 Reflection AI**（前 DeepMind 研究人员创立的前沿开放模型公司）——若成行意味着 NVIDIA 从"卖铲子"正式下场做基础模型 |
| 10 月 | 承诺 5 年、2.5 亿美元算力捐赠支持英国 AI 安全研究；Vera Rubin NVL72 投产实测 token 吞吐提升 4.8 倍 |
| 10 月 | vLLM 针对 DeepSeek-V4-Flash 与 Nemotron-3.5-Lightning 做到推理采样与训练前向 logprobs 比特级一致，采样吞吐维持 91% |

### Super VL 的后训练采用方（Nemotron "燃料"定位的直接体现）

Scale AI（Skydance 供应商信贷金融 Agent、EY 并购尽调 Agent）、AfterQuery（Hebbia 信贷协议分析）、**AI21** 与 Alice（网络安全攻击韧性）、Mercor（APEX-SWE 编码 Agent）、Atlassian（Jira/Confluence 跨应用智能体搜索）、CrowdStrike（企业级 Agentic blue teaming）、Dassault Systèmes（工程设计与仿真）、Ramp、Dream、Lila Sciences、R1、ModelScope（ms-swift 微调）。

## 关键里程碑

- 2024-06 **Nemotron-4 340B**：把"用大模型造训练数据"这条路产品化，并开源了数据生成流水线。
- 2025-03 **Nemotron-H**：NVIDIA 自研架构的起点（此前都是后训练 Llama）。
- **2025-12-15 Nemotron 3**：正式成为"开放模型厂商"——同时提供权重、训练数据与配方，路透与 Wired 均将其视为 NVIDIA 从硬件供应商向模型开发者扩张的标志。
- **2026-03 Nemotron Coalition** 成立：多家 AI 实验室协作开发开放前沿模型，被视为 Nemotron 4 的铺垫。
- 2026-06 Nemotron 3 Ultra（550B/55B）发布，家族规模封顶。
- **2026-10-17 Nemotron 3.5 Super VL / Bolt**：家族从"服务器档"补齐到"边缘档"，覆盖从企业服务器到 RTX / Jetson 本地硬件的全谱系。

## 重点 model 文档

- [Nemotron 3](./Nemotron-3.md)

## "什么时候不再基于 Llama？"

两个可辩护的时间点：
- **2025-03-19** Nemotron-H-8B-Base-8K 发布——首个 NVIDIA 自研架构（但属研究级）。
- **2025-08-18** Nemotron Nano 2——架构与命名同时改变，模型卡明确写"trained from scratch by NVIDIA"，是干净的分界。

NVIDIA 直到 2025-11 仍在发布 Llama 前缀的量化产物，所以 Llama 前缀的制品比 Llama 架构多活了约三个月。

## 备注

- **训练数据许可要细看**：预训练语料是**可撤销、不可转让、仅限训练**的许可（任一方可提前 30 天通知终止，终止后 14 天内必须删除并认证），并非通常意义上的开放数据集；后训练 SFT/RL 数据才是 CC-BY-4.0。这与"Nemotron 全开放"的印象有落差。
- **命名易混**：2023-11 的 `nemotron-3-8b` 与 2025-12 的 Nemotron 3 家族共享字符串 "nemotron-3"，但前者已死、是另一个东西。
- 早期世代（Nemotron-4 340B、Minitron、Llama- 前缀系列）至今仍挂在 Hugging Face 上，导致旧资料描述错误阵容——查资料时注意发布时间。
- 官方提示：Super/Ultra/Lightning 的模型卡里 `datasets` 字段声明的两个仓库 slug 实际是 collection 而非 dataset 仓库，链接是死的。
