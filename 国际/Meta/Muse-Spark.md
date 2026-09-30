---
厂商: Meta（Meta Superintelligence Labs, MSL）
系列: Muse
模型: Muse Spark（1.0 / 1.1 / 1.2 / 1.3）
首个发布时间: 2026-04-08（1.0）
最新版本: Muse Spark 1.3（2026-09-02；max 推理档 2026-09-04）
参数量/架构: 参数未公开；1.3 上下文 1M，原生多模态
开源/闭源: **闭源 API-only**（截至 2026-09 未开放权重）
---

# Muse Spark

## 基本信息
Muse Spark 是 MSL 的**闭源前沿旗舰线**，2026-04-08 首发即接管 Meta AI，且**明确不提供开放权重**——这与 Llama 路线形成 Meta 内部的战略分野。

## 版本迭代
| 版本 | 日期 | 关键变化 |
|---|---|---|
| Spark 1.0 | 2026-04-08 | MSL 首个模型；闭源前沿；接管 Meta AI |
| Spark 1.1 | 2026-07-09 | 工具调用增强；Meta Model API 进入公开开发者预览 |
| Spark 1.2 | 2026-08-05 | 同发 **Muse Code** 终端编码智能体；AA 智能指数 **54**（同类中位数 32） |
| Spark 1.3 | 2026-09-02 | **1M 上下文**；面向长程智能体工作；max 推理档 09-04 开放 |

## 关键规格（1.3）
- API 名：`muse-spark-1.3`（另有更便宜的 `muse-spark-1.3-contributor` 档，**允许 Meta 用你的 prompt 训练**）。
- 定价：标准档 **$1.25 / $4.25** 每百万 tokens（与 1.2 持平）；contributor 档 **$0.10 / $0.20**。
- 上下文 **1M**，原生多模态输入。
- 智能体编码效率：Meta 称较 1.2 **减少约 20% 工具调用、约 25% tokens**。
- max 推理档于 **2026-09-04** 上线，仅标准档可用。

## 下游产品
- **Muse Code**（2026-08-05）：终端编码智能体。
- **Muse 个人智能体 App**（2026-09-08）：消费级 Agent，可开浏览器、填表、发邮件、下单；由 Spark 1.3 驱动。

## 备注
- 参数规模官方未公开，本文不臆测。
- **开放权重承诺悬空**：08-10 点名 Spark 1.2 将开源，但 09-02 官方措辞已降级为无版本号/无日期的"the Muse Spark open weights release"，截至 2026-09 未发布。
- 来源：aiwiki（meta_superintelligence_labs）、diego-rodriguez、mungomash、tech-insider。
