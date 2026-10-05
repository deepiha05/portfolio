// All the text on the site lives here. Wrap words in **double asterisks** to bold them.

export const profile = {
  name: "Deepiha Sivakumar",
  firstName: "Deepiha",
  // Image in public/; set to null to show initials instead
  headshot: "/headshot.jpg" as string | null,
  // PDF in public/; set to null to hide the Resume button
  resume: "/resume.pdf" as string | null,
  github: "https://github.com/deepiha05",
  linkedin: "https://www.linkedin.com/in/deepiha-s/",
}

export const journey = [
  {
    year: "2026 – 2027",
    role: "Master of Computer Science",
    place: "University of California, Irvine",
    detail: "Expected December 2027",
  },
  {
    year: "2025 – 2026",
    role: "Software Engineer, Edge AI",
    place: "Texas Instruments",
    detail: "Operator kernels and test infrastructure for a custom NPU",
  },
  {
    year: "2024",
    role: "Embedded Software Intern",
    place: "Texas Instruments",
    detail: "PR-triggered static analysis for the Sitara MPU team",
  },
  {
    year: "2020 – 2025",
    role: "Dual Degree (B.Tech Hons + M.Tech), CSE",
    place: "IIT Kharagpur",
    detail: "Research in vision-language models and multimodal learning",
  },
]

export const experience = [
  {
    company: "Texas Instruments",
    role: "Software Engineer, Edge AI – Full-Time",
    period: "July 2025 – July 2026",
    points: [
      "Designed and implemented **7** low-level-neural-network operator kernels — Add, Sub, Mul, Conv2D, Linear, AvgPool2D, Sigmoid — for a custom Neural Processing Unit (**NPU**), optimizing **tiling, DMA scheduling,** memory-bank access and **schedule generation** to support downstream model deployment.",
      "Implemented N-dimensional broadcasting for Add/Sub/Mul via **compact DMA** and **vector-SRAM replay**, enabling complete coverage across **8** broadcast categories and broader operator support.",
      "Built a reusable deep-learning test framework validating kernels against **PyTorch** reference across **10,000+** test cases and **5** numeric precisions, diagnosing accelerator defects including OOB DMA, memory corruption, NaN propagation, and BF16 drift ahead of hardware bring-up.",
      "Built a **Claude skill** to auto-generate kernel code from finalized design specifications, cutting new-operator development time by **~4×** and accelerating the node-library roadmap.",
      "Deployed production object-detection models to **INT8** via **quantization-aware distillation** and an **ONNX-to-PyTorch pipeline**, retaining **97–100%** FP32 accuracy for edge deployment.",
    ],
  },
  {
    company: "Texas Instruments",
    role: "Embedded Software Intern, Sitara Microprocessor Unit Team (MPU)",
    period: "May 2024 – July 2024",
    points: [
      "Redesigned Git PR static-analysis workflow using **Jenkins** and **Klocwork**, replacing nightly builds with PR-triggered checks and reducing analysis time by **6×** through selective modified-file scanning.",
      "Developed **Shell scripts** for automating coding-standard checks on modified files, enforcing **MISRA C/C++ compliance** and enabling end-to-end static analysis within the **CI/CD** workflow.",
      "Explored dynamic analysis with **LDRA**, identifying a CLI approach to eliminate GUI dependency and enable a touch-free developer workflow, with automation scoped for integration beyond the scope of my internship.",
    ],
  },
]

export type Project = {
  name: string
  meta: string
  description: string
  image: string
  imageAlt: string
  tags: string[]
  links: { label: string; href: string }[]
}

export const research: Project[] = [
  {
    name: "Multimodal Benchmark for Vision-Language Reasoning on Rebus Puzzles",
    meta: "M.Tech Thesis · Prof. Pawan Goyal · IIT Kharagpur · Aug 2024 – Apr 2025",
    description:
      "Built a benchmark of **1,333** rebus puzzles across **18** categories to evaluate multimodal reasoning in **6** closed- and open-source vision-language models. Developed **RebusDescProgICE**, combining code-based reasoning with embedding-based example selection, improving performance by **2.1–4.1%** on closed-source and **20–30%** on open-source models.",
    image: "/projects/rebus.svg",
    imageAlt: "A rebus puzzle reading Mary plus Mary, whose answer is Summary",
    tags: ["VLMs", "Prompting", "CLIP", "ControlNet", "Benchmarking"],
    links: [{ label: "Paper (arXiv)", href: "https://arxiv.org/abs/2511.01340" }],
  },
  {
    name: "Caption-Enhanced Image Classification & Synthetic Data Augmentation",
    meta: "B.Tech Thesis · Prof. Abir Das · IIT Kharagpur · Aug 2023 – Apr 2024",
    description:
      "A multimodal classification framework combining **ViT** image embeddings with **BLIP-2/BERT** caption representations across CIFAR-100 and Caltech-101. Integrated BLIP-2 and **Stable Diffusion** for caption generation and synthetic-data augmentation, achieving **96.5%** on Caltech-101 and **82.59%** on CIFAR-100.",
    image: "/projects/caption-fusion.svg",
    imageAlt: "Pipeline diagram: an image goes through ViT and through BLIP-2 and BERT, the two encodings are fused, and a classifier predicts the label",
    tags: ["ViT", "BLIP-2", "BERT", "Stable Diffusion", "scikit-learn"],
    links: [
      { label: "Reports", href: "https://drive.google.com/drive/u/0/folders/1Auit9QplqEzqh7qkB1e16LuqDHJnJ2RK" },
    ],
  },
]

export const projects: Project[] = [
  {
    name: "MyTCP: Message-Oriented TCP",
    meta: "Computer Networks · IIT Kharagpur · Mar – Apr 2023",
    description:
      "A message-oriented protocol in **C** on top of TCP, with wrappers for the standard socket calls so that every send delivers one whole message, reliably and in order. Uses **length-prefixed message framing** and separate **send and receive threads** for concurrent, asynchronous communication.",
    image: "/projects/mytcp.svg",
    imageAlt: "Diagram of length-prefixed messages flowing between a sender thread and a receiver thread",
    tags: ["C", "Sockets", "pthreads", "Networking"],
    links: [{ label: "GitHub", href: "https://github.com/deepiha05/mytcp-network-programming" }],
  },
  {
    name: "TinyC Compiler",
    meta: "Compilers Lab · IIT Kharagpur · Sep – Nov 2022",
    description:
      "A compiler for **TinyC**, a subset of C as defined in ISO/IEC 9899:1999, with a **lexer**, **parser**, machine-independent **intermediate code generator** and **target code generator** for x86-64.",
    image: "/projects/tinyc.svg",
    imageAlt: "Compiler pipeline: source code, lexer, parser, three-address code, x86-64 assembly",
    tags: ["C++", "Flex", "Bison", "x86-64"],
    links: [{ label: "GitHub", href: "https://github.com/deepiha05/tinyC-compiler" }],
  },
  {
    name: "Oblivious Cross-Tags Searchable Encryption Server",
    meta: "Design Lab · IIT Kharagpur · Feb – Apr 2025",
    description:
      "Separated the **TWINSSE** codebase into standalone **C++** client and server programs talking over **TCP**, with the server in a **QEMU** CentOS VM. Implemented setup and conjunctive search for the **OXT** protocol with encrypted index entries in **Redis** and a **Bloom filter**, plus a memory-analysis tool that diffs server memory snapshots before and after each query.",
    image: "/projects/oxt.svg",
    imageAlt: "Diagram of a client sending an encrypted search query to a server inside a virtual machine",
    tags: ["C++", "Cryptography", "Redis", "QEMU"],
    links: [{ label: "GitHub", href: "https://github.com/deepiha05/oxt-searchable-encryption" }],
  },
  {
    name: "RVL-CDIP Document Image Classification",
    meta: "Information Retrieval · IIT Kharagpur · Aug – Nov 2022",
    description:
      "Classified grayscale document images into **16** classes with MobileNet, EfficientNet, DenseNet, ResNet, Vision Transformer, LSTM, few-shot learning and ensembles. An ensemble combining **CNNs and Transformers** reached **77.0%** test accuracy.",
    image: "/projects/rvl-cdip.svg",
    imageAlt: "Document thumbnails labelled letter, invoice, form and resume",
    tags: ["TensorFlow", "CNNs", "Transformers", "Ensembles"],
    links: [{ label: "GitHub", href: "https://github.com/deepiha05/rvl-cdip-document-classification" }],
  },
]

export const skills = [
  {
    group: "AI/ML",
    items: ["PyTorch", "TensorFlow", "Keras", "Transformers", "OpenCV", "ONNX", "Quantization", "VLM", "Knowledge Distillation"],
  },
  {
    group: "Systems",
    items: ["Embedded Linux", "Computer Architecture", "x86-64 Assembly", "Linux System Calls", "Kernel Development"],
  },
  {
    group: "Backend/Data",
    items: ["C++", "C", "Python", "Java", "NodeJS", "MySQL", "MongoDB", "Vector DB", "Spark", "Kafka", "Hadoop", "CI/CD", "Git"],
  },
  {
    group: "Development",
    items: ["Typescript", "ReactJS", "NextJS", "REST API", "Web Sockets", "SSE", "GraphQL", "Claude Code", "Agent Skills"],
  },
]

export const awards = [
  {
    title: "National Talent Search Examination (NTSE) Scholar",
    year: "2018",
    detail:
      "Selected as one of the top **~2,000 students nationally** out of **1.5M+** applicants in one of India's most competitive, government-funded talent recognition programs.",
  },
]
