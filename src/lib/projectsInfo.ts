export const portfolioItems = [
  {
    slug: 'ragmind',
    text: 'RAGmind',
    image: '/ragmind.png',
    aboutPics: ['/ragmind.png', '/ragmind.png', '/ragmind.png'],
    description:
      'RAGmind is a fully local, privacy-first Retrieval-Augmented Generation platform for querying large collections of PDFs. It chunks, embeds, and indexes documents offline, then grounds every LLM answer in retrieved passages with inline source citations — no data ever leaves the machine.',
    link: 'https://github.com/Krishna753-jbasdxlbj/Ragmind',
    more: ['/portfolio/pan-ocr', '/portfolio/indiaerp'],
    moreImgs: ['/panocr.png', '/indiaerp.png'],
    features: [
      {
        title: 'Multi-PDF Ingestion',
        description:
          'Drag-and-drop dozens of PDFs at once; the pipeline parses, cleans, and chunks them with overlap-aware splitting for high-recall retrieval.',
      },
      {
        title: 'Local Embeddings',
        description:
          'Documents are embedded on-device with sentence-transformer models and stored in a local vector index — zero cloud calls, full data privacy.',
      },
      {
        title: 'Grounded Answers + Citations',
        description:
          'Every response cites the exact source chunks and page numbers it was built from, making answers auditable and trustworthy.',
      },
      {
        title: 'Hybrid Retrieval',
        description:
          'Combines dense vector search with keyword (BM25) scoring and re-ranking to surface the most relevant passages for each query.',
      },
      {
        title: 'Streaming Chat UI',
        description:
          'A responsive chat interface streams tokens as they are generated and keeps full conversation history with per-message sources.',
      },
      {
        title: 'Offline by Default',
        description:
          'Runs entirely against a locally hosted LLM, so it works air-gapped and is safe for confidential or regulated documents.',
      },
    ],
    technologies: [
      {
        title: 'LangChain',
        description:
          'Orchestrates the RAG pipeline — loaders, splitters, retrievers, and the prompt/answer chain.',
      },
      {
        title: 'Vector Database',
        description:
          'A local vector store (FAISS / Chroma) holds document embeddings for fast similarity search.',
      },
      {
        title: 'Sentence Transformers',
        description:
          'On-device embedding models convert chunks and queries into dense vectors without external APIs.',
      },
      {
        title: 'Ollama / Local LLM',
        description:
          'Serves an open-weight LLM locally for fully offline, private generation.',
      },
      {
        title: 'FastAPI',
        description:
          'Python backend exposing ingestion and chat endpoints with streaming support.',
      },
      {
        title: 'React + Next.js',
        description:
          'Frontend chat experience with streaming responses, source viewer, and document management.',
      },
    ],
  },
  {
    slug: 'pan-ocr',
    text: 'PAN Card OCR',
    image: '/panocr.png',
    aboutPics: ['/panocr.png', '/panocr.png', '/panocr.png'],
    description:
      'An end-to-end document understanding pipeline that detects and reads Indian PAN cards from photos and scans. A custom-trained YOLOv8 detector localizes each field, followed by an OCR stage that extracts name, PAN number, and date of birth — reaching 94.2% mAP on the held-out validation set.',
    link: 'https://github.com/Krishna753-jbasdxlbj',
    more: ['/portfolio/voter-id', '/portfolio/ragmind'],
    moreImgs: ['/voterid.png', '/ragmind.png'],
    features: [
      {
        title: '94.2% mAP Detection',
        description:
          'A fine-tuned YOLOv8 model localizes PAN fields with 94.2% mean Average Precision across varied lighting, angles, and scan quality.',
      },
      {
        title: 'Field-Level Extraction',
        description:
          'Each detected region is cropped and passed through OCR to return structured JSON: name, father’s name, PAN number, and date of birth.',
      },
      {
        title: 'Robust Pre-processing',
        description:
          'Automatic deskew, denoise, and contrast normalization handle real-world phone photos and low-quality scans.',
      },
      {
        title: 'Validation & Confidence',
        description:
          'Regex and checksum validation on the PAN format flags low-confidence reads for human review.',
      },
      {
        title: 'Batch Pipeline',
        description:
          'Processes folders of documents in batch with per-file logging and exportable structured results.',
      },
    ],
    technologies: [
      {
        title: 'YOLOv8 (Ultralytics)',
        description:
          'Custom-trained object detector for localizing PAN card fields with high precision.',
      },
      {
        title: 'PyTorch',
        description:
          'Deep-learning framework backing model training, augmentation, and evaluation.',
      },
      {
        title: 'OpenCV',
        description:
          'Image pre-processing — deskew, denoise, perspective correction, and cropping.',
      },
      {
        title: 'Tesseract / PaddleOCR',
        description:
          'Optical character recognition stage that reads the localized text regions.',
      },
      {
        title: 'Python',
        description:
          'Glue code for the detection → OCR → validation → export pipeline.',
      },
      {
        title: 'FastAPI',
        description:
          'Serves the pipeline as an inference API for integration into other apps.',
      },
    ],
  },
  {
    slug: 'voter-id',
    text: 'Voter ID Extractor',
    image: '/voterid.png',
    aboutPics: ['/voterid.png', '/voterid.png', '/voterid.png'],
    description:
      'A computer-vision pipeline that extracts structured fields from Indian Voter ID cards (EPIC). Combining detection and OCR with confidence scoring, it reliably pulls name, EPIC number, and demographic fields at 97%+ confidence, ready for downstream KYC and verification flows.',
    link: 'https://github.com/Krishna753-jbasdxlbj/voter-id',
    more: ['/portfolio/pan-ocr', '/portfolio/indiaerp'],
    moreImgs: ['/panocr.png', '/indiaerp.png'],
    features: [
      {
        title: '97%+ Confidence Extraction',
        description:
          'Field reads are returned with confidence scores, with the pipeline tuned to exceed 97% confidence on clean inputs.',
      },
      {
        title: 'Layout-Aware Parsing',
        description:
          'Understands the EPIC card layout to map detected text to the correct semantic field instead of blind OCR.',
      },
      {
        title: 'Multi-Format Support',
        description:
          'Handles both older and newer Voter ID templates as well as front/back variants.',
      },
      {
        title: 'Noise Resilience',
        description:
          'Pre-processing pipeline copes with glare, watermarks, and low-resolution captures.',
      },
      {
        title: 'Structured Output',
        description:
          'Emits clean JSON for each card, ideal for plugging directly into KYC and onboarding systems.',
      },
    ],
    technologies: [
      {
        title: 'YOLOv8',
        description:
          'Detects and localizes individual fields on the Voter ID card.',
      },
      {
        title: 'PyTorch',
        description:
          'Powers model training and inference for the detection stage.',
      },
      {
        title: 'OpenCV',
        description:
          'Image cleanup and geometric normalization before recognition.',
      },
      {
        title: 'OCR Engine',
        description:
          'Reads localized regions and feeds the confidence-scored extraction logic.',
      },
      {
        title: 'Python',
        description:
          'Implements the orchestration, validation, and export layers.',
      },
    ],
  },
  {
    slug: 'indiaerp',
    text: 'IndiaERP',
    image: '/indiaerp.png',
    aboutPics: ['/indiaerp.png', '/indiaerp.png', '/indiaerp.png'],
    description:
      'IndiaERP is a GST-ready SaaS ERP built for Indian small and medium businesses. It covers GST-compliant invoicing, inventory, and role-based access in a single-company-per-deployment model, with a modern React frontend and a Supabase (Postgres) backend.',
    link: 'https://github.com/Krishna753-jbasdxlbj',
    more: ['/portfolio/ragmind', '/portfolio/sha3-fpga'],
    moreImgs: ['/ragmind.png', '/sha3.png'],
    features: [
      {
        title: 'GST-Compliant Invoicing',
        description:
          'Generates GST invoices with correct CGST/SGST/IGST splits, HSN codes, and printable, shareable formats.',
      },
      {
        title: 'Inventory & Catalog',
        description:
          'Tracks stock, products, and pricing with low-stock signals and per-item tax configuration.',
      },
      {
        title: 'Role-Based Access',
        description:
          'Fine-grained permissions for owners, accountants, and staff, enforced at the database layer.',
      },
      {
        title: 'Dashboards & Reports',
        description:
          'Sales, tax, and revenue summaries surface the numbers an SMB owner actually needs at a glance.',
      },
      {
        title: 'Single-Company Deployments',
        description:
          'Each deployment serves one company with row-level security, keeping data cleanly isolated.',
      },
    ],
    technologies: [
      {
        title: 'Next.js + React',
        description:
          'Modern, fast frontend for the invoicing, inventory, and reporting UI.',
      },
      {
        title: 'TypeScript',
        description:
          'Type-safe codebase across frontend and backend logic.',
      },
      {
        title: 'Supabase (Postgres)',
        description:
          'Postgres database, auth, and row-level security backing the multi-role data model.',
      },
      {
        title: 'Edge Functions',
        description:
          'Serverless functions handle invoice generation and business logic close to the data.',
      },
      {
        title: 'Tailwind CSS',
        description:
          'Utility-first styling for a clean, responsive admin experience.',
      },
    ],
  },
  {
    slug: 'sha3-fpga',
    text: 'SHA-3 FPGA',
    image: '/sha3.png',
    aboutPics: ['/sha3.png', '/sha3.png', '/sha3.png'],
    description:
      'A pipelined hardware implementation of the SHA-3 (Keccak) cryptographic hash function, written in Verilog and deployed to FPGA. The design unrolls and pipelines the Keccak permutation rounds for high throughput, with a fully verified testbench against the official NIST vectors.',
    link: 'https://github.com/Krishna753-jbasdxlbj',
    more: ['/portfolio/indiaerp', '/portfolio/pan-ocr'],
    moreImgs: ['/indiaerp.png', '/panocr.png'],
    features: [
      {
        title: 'Pipelined Keccak Core',
        description:
          'The 24 Keccak-f[1600] rounds are pipelined to maximize clock frequency and sustained hashing throughput.',
      },
      {
        title: 'NIST Vector Verified',
        description:
          'A self-checking testbench validates the core against the official NIST SHA-3 known-answer test vectors.',
      },
      {
        title: 'Configurable Output',
        description:
          'Supports SHA3-256/384/512 digest sizes through parameterized rate and capacity settings.',
      },
      {
        title: 'Resource-Aware Design',
        description:
          'Balances area and speed, with the theta/rho/pi/chi/iota steps mapped efficiently to FPGA logic.',
      },
      {
        title: 'Synthesizable RTL',
        description:
          'Clean, vendor-neutral RTL that synthesizes across common FPGA toolchains.',
      },
    ],
    technologies: [
      {
        title: 'Verilog HDL',
        description:
          'Register-transfer-level description of the full Keccak datapath and control.',
      },
      {
        title: 'FPGA',
        description:
          'Target platform for synthesis, place-and-route, and on-hardware validation.',
      },
      {
        title: 'Keccak / SHA-3',
        description:
          'The NIST-standardized sponge construction implemented in hardware.',
      },
      {
        title: 'Testbench / Simulation',
        description:
          'Simulation-driven verification against known-answer test vectors.',
      },
      {
        title: 'Vivado / Quartus',
        description:
          'Synthesis and timing-analysis toolchain used to close timing on the design.',
      },
    ],
  },
];
