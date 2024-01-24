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
    "I'm Mark. I enjoy making sense of complex systems and doing craftsman's work. Lately, I've been focusing on building LLM web applications, but in the past I've deeply explored machine learning for structural biology, computational genomics, and computer architecture.",
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
        url: "https://twitter.com/markycasty",
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
  research: [
    {
      title: "Learning Atomic Models of Dynamic Protein Complexes: Benchmarking and Challenges",
      techStack: [
        "Python",
        "PyTorch",
        "Bash/Slurm",
        "ChimeraX"
      ],
      description: "Advised by [Ellen Zhong](https://www.cs.princeton.edu/~zhonge/), PI of the [DRGN Lab](https://ezlab.princeton.edu/). Used Cryo-DRGN and ModelAngelo to automate the construction of atomic models of large, dynamic protein complexes from cryo-EM data.",
      logo: ConsultlyLogo,
      link: {
        label: "Master's Thesis",
        href: "https://drive.google.com/file/d/1BGOo9woumWeGQBF4x2GJ7nsM4zJKbDA2/view?usp=sharing",
      },
    },
    {
      title: "Network Boosting to Uncover Local Areas of Function in Single Cell Transcriptomic Data",
      techStack: [
        "R",
        "Python"
      ],
      description: "Advised by [Claire McWhite](https://clairemcwhite.github.io/), in the [Akey Lab](https://akeylab.princeton.edu/). ",
      logo: ConsultlyLogo,
      link: {
        label: "Senior Thesis",
        href: "https://drive.google.com/file/d/1T06JKlcMqKBDcOtrjWlbfeRVPTVEpR-A/view?usp=drive_link",
      },
    }
  ],
  projects: [
    {
      title: "ProteinBind",
      techStack: [
        "Python",
        "PyTorch",
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
} as const;