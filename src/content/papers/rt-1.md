---
title: 'RT-1: Robotics Transformer for Real-World Control at Scale'
titleZh: 'RT-1：面向大规模真实世界控制的 Robotics Transformer'
authors:
  - Anthony Brohan
  - Noah Brown
  - Justice Carbajal
  - Yevgen Chebotar
  - Joseph Dabis
  - Chelsea Finn
  - et al.
year: 2022
venue: 'arXiv preprint'
type: 'Preprint'
doi: null
arxiv: 'https://arxiv.org/abs/2212.06817'
pdf: 'https://arxiv.org/pdf/2212.06817'
abstract: 'The paper studies a Robotics Transformer model class and examines how data size, model size, and data diversity relate to generalization in real-robot task learning.'
abstractZh: '论文研究 Robotics Transformer 模型类别，并考察数据规模、模型规模与数据多样性和真实机器人任务泛化之间的关系。'
keywords:
  - robotics transformer
  - real-world control
  - robot learning
  - generalization
bibtex: |
  @article{brohan2022rt1,
    title   = {RT-1: Robotics Transformer for Real-World Control at Scale},
    author  = {Brohan, Anthony and Brown, Noah and Carbajal, Justice and Chebotar, Yevgen and Dabis, Joseph and Finn, Chelsea and others},
    journal = {arXiv preprint arXiv:2212.06817},
    year    = {2022},
    url     = {https://arxiv.org/abs/2212.06817}
  }
featured: true
sample: true
---

> **Starter reading record.** This public preprint is included as a traceable example for the robotics reading list. It is not a personal publication.

## Reading focus

The paper frames generalization as a scaling question over real-robot data rather than as an isolated architecture comparison. A useful reading note should track how the data collection setup, task mixture, and evaluation design shape the conclusions.

## Questions for a deeper note

- What kinds of diversity are measured, and what kinds remain unobserved?
- How are task success and generalization operationalized?
- Which engineering constraints become visible only on real robots?
- Which parts of the result are evidence about scale, and which are evidence about the model class?
