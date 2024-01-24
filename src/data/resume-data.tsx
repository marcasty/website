import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mark Castellano",
  initials: "MC",
  location: "New York, New York",
  locationLink: "https://maps.app.goo.gl/77jY6TeHCP89Dr8A8",
  about:
    "electrical engineer trying to build a new electric grid",
  summary:
    "I know how to build LLM applications with agentive behavior, state-of-the-art information retrieval (RAG) systems, and fine-tuning. I'm using these techniques to identify the optimal land for building powerplants by making all of the land in America queryable. We'll build tiny grids to support the energy demands of the future.",
  avatarUrl: "https://avatars.githubusercontent.com/u/86732961?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "markacastellano2@gmail.com",
    tel: "+1(973)2952690",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marcasty",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mark-castellano-21209b143",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Princeton Universty",
      degree: "Bachelor of Science and Engineering Degree in Electrical and Computer Engineering",
      start: "2018",
      end: "2022",
    },
    {
      school: "Princeton Universty",
      degree: "Master of Engineering Degree in Electrical and Computer Engineering",
      start: "2022",
      end: "2023",
    },
  ],
  work: [
    {
      company: "HiberCell",
      link: "https://hibercell.com/",
      badges: [],
      title: "Bioinformatics Intern",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "I analyzed clinical scRNA-seq data from peripheral blood mononuclear cells to identify optimal dosing schemes for a treatment in the pipeline.",
    },
    {
      company: "HiberCell",
      link: "https://hibercell.com/",
      badges: [],
      title: "Bioinformatics Intern",
      logo: ParabolLogo,
      start: "2021",
      end: "2021",
      description:
        "I analyzed scRNA-seq data from Triple Negative Breast Cancer cells and identified gene expression profiles correlated with patient outcomes.",
    },
    
  ],
  skills: [
    "Python",
    "Pytorch",
    "Postgresql",
    "FastAPI",
    "React",
    "Typescript",
    "Verilog",
    "R",
    "Bash"
  ],
  projects: [
    {
      title: "ProteinBind",
      techStack: [
        "Hackathon Project",
        "Python",
        "Pytorch",
        "Gradio",
      ],
      description: "First Place and Impact Prize in BioxML Hackathon by Lux Capital and HuggingFace. ImageBind but for Proteins. Unified amino acid sequence, MSA, 3D structure, DNA sequence, and GO Terms to make better embeddings",
      logo: ConsultlyLogo,
      link: {
        label: "hackathon.bio",
        href: "https://hackathon.bio/",
      },
    },
    {
      title: "MealSegmentation",
      techStack: ["Side Project", "Python", "PyTorch", "AWS"],
      description:
        "Predict the food and portions from an image using SAM and Grounding DINO",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
  ],
} as const;