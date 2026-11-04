---
厂商: 深度求索（DeepSeek）
地区: 中国
总部: 中国杭州
成立: 2023-07-17（自幻方量化 AGI 实验室独立）
定位: 高性价比开放权重模型、强推理
开源/闭源: 开源权重（MIT / Apache 2.0）
模型系列: DeepSeek（单一主线；单系列，model 文档直接放本目录）
数据来源: DeepSeek 官方、Hugging Face、Wikipedia、aireleasetracker、deepseekai.guide、中国日报、彭博社、中国证券报、澎湃新闻、雪球《全球大模型跟踪》(10.15)
状态: 已完善（含 2026 最新 V4 代际；2026-10-22 增量更新：V4.1-Flash-1017、约千亿元融资）
---

> 🆕 **近一月动态（2026-09-22 → 2026-10-22）**
>
> - **10-17 V4.1-Flash-1017 发布**（官方网页端 / App / API 三端同步切换）：基于自反馈强化学习（RL）提升"从零构建完整项目"的能力，官方称为**「许愿式编程」**——自然语言描述需求，模型自主完成开发。展示案例含故宫 3D 建模、网页版赛车游戏、Godot 引擎《传送门 2》复刻、Valley of Ages 3D 场景。
>   - 基准提升（官方口径）：Agents' Last Exam 31.8→35.4、Apex Bench v1.1 64.6→72.1、Automation-Bench v1.0.6 54.8→60.5、Terminal-Bench 4.0 31.2→42.3、DeepSWE v1.1 74.2→77.0、ProgramBench 20.3→29.1、NL2Repo-Bench 65.4→68.2、BabyVision（含工具）92.5、ZeroBench-main 51.0。
>   - **API 价格未上调**，同时缩短任务运行时间与输出长度——官方定性为性能与成本的**「帕累托改进」**。
>   - 同日 **DeepSeek Harness 0.2.1** 适配新模型；**开放自研 Search 与 Fetch API**（均 5 元/千次）。
> - **调用量**：OpenRouter 10-05–10-11 周榜 **V4.1 Flash 以 41 万亿 Token 位列全球第一**（环比 +60%），超过第二到第五名之和；中国模型当周合计 86.74 万亿 Token（环比 +50.96%），连续 24 周居首。
> - **融资**（彭博社 10-06）：新一轮从最初约 500 亿元上调至**接近 1000 亿元**，投前估值仍约 5000 亿元。宁德时代、腾讯为承诺出资最高方之一（宁德时代拟增资约 100 亿），新进投资方含石溪资本、中芯聚源、CPE 源峰、君联资本、吉利等。为 2027 年初潜在 IPO 铺路。
> - **产品线整理**：V4Flash 与 V4Flash Vision Exp 已停服；**自 2026-09-14 12:00 起对 `deepseek-v4-pro` 的请求重定向至 V4.1-Flash 并按其费率计费**（V4 Pro 进入淘汰流程，V4.1 Pro 正式版发布前）。
> - **投资**：拟领投具身智能大脑初创公司 **Winverse AI**（前腾讯视觉语言及具身智能基础模型负责人胡瀚创办）数千万美元种子轮，投后估值约 4 亿美元——继 2026-08 投资宇树科技后再度布局机器人赛道。
> - **基建**：同步在内蒙古建设大型数据中心，计划部署至少 16 万枚华为高端 AI 加速芯片。

# 深度求索（DeepSeek）

- 地区：中国
- 总部：中国杭州
- 成立：2023-07-17（从幻方量化 AGI 实验室独立）
- 定位：高性价比开放权重模型、强推理
- 开源/闭源：开源权重（MIT / Apache 2.0）
- 模型系列：DeepSeek（单一主线系列；单系列，model 文档直接放本目录）
- 数据来源：DeepSeek 官方、Hugging Face、Wikipedia、aireleasetracker、deepseekai.guide、中国日报
- 状态：已完善（含 2026 最新 V4 代际）

## 语言模型版本演进（主线）

| 模型 | 发布时间 | 架构 / 参数 | 开源 | 备注 |
| --- | --- | --- | --- | --- |
| DeepSeek-Coder | 2023-11-02 | Dense（代码） | 是 | 首个公开模型 |
| DeepSeek-LLM | 2023-11-29 | Dense 7B / 67B | 是 | 首个通用模型 |
| DeepSeek-MoE | 2024-01-11 | MoE | 是 | 首款 MoE |
| DeepSeek-Math | 2024-02-05 | 基于 Coder | 是 | 提出 GRPO |
| DeepSeek-V2 | 2024-05-06 | MoE 236B / 21B（MLA） | 是 | 引发价格战，[详情](./DeepSeek-V2.md) |
| DeepSeek-Coder-V2 | 2024-06-17 | 基于 V2 骨干 | 是 | 复兴代码线 |
| DeepSeek-V2.5 | 2024-09-05 | 合并 Chat + Coder | 是 | |
| DeepSeek-R1-Lite-Preview | 2024-11-20 | 推理预览 | 否（预览） | |
| DeepSeek-V3 | 2024-12-26 | MoE 671B / 37B | 是 | ~$5.6M 训练，[详情](./DeepSeek-V3.md) |
| DeepSeek-R1 | 2025-01-20 | 推理 671B（GRPO） | 是 | Sputnik moment，[详情](./DeepSeek-R1.md) |
| DeepSeek-V3-0324 | 2025-03-24 | V3 小版本升级 | 是 | 借鉴 R1 RL |
| DeepSeek-R1-0528 | 2025-05-28 | R1 更新 | 是 | |
| DeepSeek-V3.1 | 2025-08-21 | 混合 thinking / non-thinking | 是 | +800B tokens |
| DeepSeek-V3.1-Terminus | 2025-09-22 | V3.1 修复 | 是 | |
| DeepSeek-Math-V2 | 2025-11-27 | 数学 | 是（Apache 2.0） | |
| DeepSeek-V3.2 | 2025-12-01 | V3 续代 | 是 | |
| DeepSeek-V4 Preview | 2026-04-24 | Pro 1.6T/49B、Flash 284B/13B，1M | 是 | preview 先行，[详情](./DeepSeek-V4.md) |
| DeepSeek-V4-Flash（正式） | 2026-07-31 | 284B / 13B | 是 | |
| DeepSeek-V4-Pro（正式） | 2026-08-13 | 1.6T / 49B | 是 | 强化 Agent |
| DeepSeek-V4.1-Flash | 2026-09-10 | V4 续代 | 是 | 当前最新 |

## 关键里程碑
- 2023-11 首个公开模型（Coder / LLM）
- 2024-05 V2 发布，MLA 架构引发中国大模型价格战
- 2024-12 V3 以约 560 万美元训练成本达顶尖水平，"极致性价比"
- 2025-01 R1 开源推理模型，全球现象级（"Sputnik moment"）
- 2026-04 V4 Preview 发布，迈入 1M 上下文 + 1.6T MoE 时代

## 重点 model 文档
- [DeepSeek-V2](./DeepSeek-V2.md)
- [DeepSeek-V3](./DeepSeek-V3.md)
- [DeepSeek-R1](./DeepSeek-R1.md)
- [DeepSeek-V4](./DeepSeek-V4.md)

## 备注
- DeepSeek 采用"开源权重 + 极致性价比"策略，主线单一但版本密集（约每 63 天一更）。
- V4 采用 preview 先行、正式版跟进（与腾讯 Hy4 同策略）；R1-Lite-Preview 亦是早期 preview 做法。
- 多模态 / 专用变体另有 VL2（视觉）、Prover（形式化证明）、Math-V2 等，本表仅列语言主线。
