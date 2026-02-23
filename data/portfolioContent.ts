import type {
  ContactInfo,
  ExperienceItem,
  MaterialSection,
  Profile,
  PublicationItem,
  StudyItem,
} from "./types";

const linkedInPublications =
  "https://www.linkedin.com/in/ionut-grigore-711000203/details/publications/";

export const profile: Profile = {
  name: "Ionut Grigore",
  role: "AI Engineer | Teaching Assistant | PhD Student",
  institution: "Polytechnic University of Timisoara",
  headline:
    "Computer vision researcher building practical AI for digital dentistry and medical imaging.",
  about:
    '"I am still learning!" - Inspired by Michelangelo\'s words, I focus on deep learning research for computer vision and on deploying production AI systems. My current work spans digital dentistry, medical imaging, and uncertainty-aware depth estimation.',
};

export const experiences: ExperienceItem[] = [
  {
    title: "AI Engineer",
    organization: "Smilecloud",
    period: "Jul 2025 - Present",
    bullets: [
      "Designing and deploying machine learning models for digital dentistry workflows.",
      "Working on 2D teeth segmentation, 2D-3D alignment between facial images and intraoral scans, and monocular camera parameter estimation.",
      "Researching diffusion-based inpainting and image enhancement methods, including automatic white-balance correction for real user photos.",
    ],
  },
  {
    title: "Teaching Assistant",
    organization: "Polytechnic University of Timisoara",
    period: "Feb 2022 - Present",
    bullets: [
      "Teaching AI Foundations for 3rd-year students: linear models, trees, clustering, CNNs, RNNs, attention, and Transformers.",
      "Teaching Computer Assisted Mathematics Laboratory for 1st-year students using MATLAB.",
      "Mentoring students on practical machine learning projects and fundamentals.",
    ],
  },
  {
    title: "AI Research Scientist",
    organization: "Siemens",
    period: "Apr 2024 - Jul 2025",
    bullets: [
      "Contributed to the ProstateAI project: fully automated AI workflow for prostate MRI examination.",
      "Developed segmentation and detection pipelines for prostate gland and lesion analysis based on nnU-Net.",
      "Built a T2-weighted MRI scan quality assessment model to predict volume-level quality scores.",
    ],
  },
  {
    title: "Applied Scientist",
    organization: "Amazon (Ring)",
    period: "Nov 2022 - Apr 2024",
    bullets: [
      "Researched and evaluated SOTA methods for depth completion, feature detection/matching, semantic segmentation, and pose estimation.",
      "Developed and improved models for Ring drone perception tasks, including dock segmentation and positional offset estimation.",
      "Advanced SuperPoint-style feature pipelines, leading to acceptance at EEML 2025 for presenting feature detection and matching work.",
    ],
  },
  {
    title: "Junior Software Engineer",
    organization: "Elektrobit (Timisoara, Romania)",
    period: "Feb 2022 - Oct 2022",
    bullets: [
      "Worked on EB Corbos Studio, an Eclipse-based IDE for Adaptive AUTOSAR workflows.",
      "Used Java, EMF, Eclipse API, JUnit, Jenkins, XML, Apache Ant, and Git in an agile setup.",
      "Contributed to tooling quality with static analysis and UI testing (PMD, Checkstyle, SonarLint, QFT).",
    ],
  },
  {
    title: "Mathematics and Informatics Substitute Teacher",
    organization: "Wendy School Timisoara",
    period: "Oct 2021 - Dec 2021",
    bullets: [
      "Taught mathematics and informatics classes as substitute teacher.",
      "Strengthened classroom communication and instructional planning skills.",
    ],
  },
  {
    title: "Intern",
    organization: "ATOSS Software AG (Timisoara, Romania)",
    period: "Jun 2021 - Aug 2021",
    bullets: [
      "Developed a full-stack virtual library application during internship training.",
      "Built backend features with Spring Boot and MySQL, including controllers and tests.",
      "Implemented frontend pages with Vue.js and validated APIs with Postman.",
    ],
  },
];

export const studies: StudyItem[] = [
  {
    degree: "PhD in Deep Learning",
    school: "Polytechnic University of Timisoara",
    years: "2024 - 2028",
    details:
      "Researching uncertainty estimation for self-supervised depth estimation using Bayesian deep learning in the national HRIA (Romanian Hub for Artificial Intelligence) project.",
    note: "Current PhD student (research track)",
  },
  {
    degree: "Master of Engineering (Machine Learning)",
    school: "Politehnica University of Timisoara",
    years: "2022 - 2024",
    details:
      "Dissertation thesis: MambaDepth, integrating state-space modeling ideas for self-supervised monocular depth estimation.",
    note: "Graduated 10/10, Best Poster Award at EEML 2024 (Novi Sad)",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "Politehnica University of Timisoara",
    years: "2018 - 2022",
    details:
      "Bachelor thesis: Self-Supervised Monocular Depth Estimation using ManyDepth, with strong focus on deep learning and computer vision fundamentals.",
    note: "Graduated 10/10 (Magna Cum Laude)",
  },
  {
    degree: "High School",
    school: '"Grigore Moisil" High School, Timisoara',
    years: "2014 - 2018",
    details:
      "Mathematics and informatics profile with strong foundations in mathematics, science, and digital competencies.",
    note: "Baccalaureate grade: 9.83/10",
  },
];

export const publications: PublicationItem[] = [
  {
    filter: "research",
    venue: "arXiv 2024",
    title:
      "MambaDepth: Enhancing Long-range Dependency for Self-Supervised Fine-Structured Monocular Depth Estimation",
    authors: "I. Grigore, C.A. Popa",
    link: "https://arxiv.org/abs/2406.04532",
  },
  {
    filter: "research",
    venue: "arXiv 2025",
    title:
      "FPC-Net: Revisiting SuperPoint with Descriptor-Free Keypoint Detection via Feature Pyramids and Consistency-Based Implicit Matching",
    authors: "I. Grigore, C.A. Popa, C. Leoveanu-Condrei",
    link: "https://arxiv.org/abs/2507.10770",
  },
  {
    filter: "problems",
    venue: "-",
    title: "Probleme pentru liceu, clasa a IX-a",
    authors: "I. Grigore",
    link: "https://drive.google.com/file/d/1CH9v4tgsLu0hcAEYRMMHWFgxmo4sCdTK/view?pli=1",
  },
  {
    filter: "problems",
    venue: "-",
    title:
      '2 problems published in "Gazeta Matematică din București", number 6-7-8/2015, problem 27085-page 367 and problem 27108-page 370',
    authors: "I. Grigore",
    link: linkedInPublications,
  },
  {
    filter: "problems",
    venue: "-",
    title:
      'A problem for lot selection at Junior Balkan Mathematical Olympiad-2016 published in "ROMANIAN MATHEMATICAL COMPETITIONS-RMC 2016", problem 7, page 72',
    authors: "I. Grigore",
    link: "https://pregatirematematicaolimpiadejuniori.files.wordpress.com/2016/07/2016_tests-1234.pdf",
  },
  {
    filter: "problems",
    venue: "Revista de Matematica din Timisoara",
    title: "Numerous problems published",
    authors: "I. Grigore",
    link: "https://drive.google.com/file/d/1izcG4XTveBS6MxGRtNO0VMqhNwQ1vb9-/view",
  },
  {
    filter: "problems",
    venue: "Editura Gil",
    title:
      "Probleme de combinatorica. Evaluare si exemplu - problem 130, page 42",
    authors:
      "Ioan Codreanu, Mircea Lascu, with problem contribution by I. Grigore",
    link: "https://drive.google.com/file/d/1xIcOxE3j9-b3lMp0OE9iXuhrUCwKl6Cz/view",
  },
  {
    filter: "articles",
    venue: "Media Interview",
    title:
      "Discussion about participation in the national mathematics olympiad and academic achievements",
    authors: "I. Grigore",
    link: "https://renasterea.ro/matematicienii-timisoarei-se-pregatesc-de-olimpiada-nationala/",
  },
  {
    filter: "articles",
    venue: "Media Interview",
    title:
      'Discussion about performance at the intercounty mathematics contest "Traian Lalescu"',
    authors: "I. Grigore",
    link: linkedInPublications,
  },
];

export const contact: ContactInfo = {
  email: "ionut.orlando@yahoo.com",
  location: "Timisoara, Timis, Romania",
  intro:
    "Open to research collaborations and applied AI roles in computer vision, medical imaging, and production ML systems.",
};

export const materials: MaterialSection[] = [
  {
    section: "MAC labs",
    items: [
      {
        title: "MAC Lab Notes - Week 1",
        href: "https://docs.google.com/presentation/d/1Jvs5nH5CNerur8zWNyyHjkK15LCzaq2P/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 2",
        href: "https://docs.google.com/presentation/d/1jGuqfGpKIzsn-3RByK4viNA5MtVfj51O/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 3",
        href: "https://docs.google.com/presentation/d/1tcTmPUirOpPcB55nS0T6z_eodVGoo5YI/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 4",
        href: "https://docs.google.com/presentation/d/16TRI14lVB6jDI5NGR-rjgKzV2vZDAB-t/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 5",
        href: "https://docs.google.com/presentation/d/1NwQeXXPGrF-i6HdeF7Wb7Fum5kHlwM4r/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 6",
        href: "https://docs.google.com/presentation/d/1fwvYJmwdNfEx2hAHOr1DsihOkxGU-VXA/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 7",
        href: "https://docs.google.com/presentation/d/1eSiJ0c_pXoFKnsUYDj9kicvXHgbi0iLm/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 8",
        href: "https://docs.google.com/presentation/d/1GUnFjI5seUQIhtaBWzWk0Jv3ZQ8MUxAT/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "MAC Lab Notes - Week 9",
        href: "https://drive.google.com/open?id=1BfAfEVqwgQ2T9q5x16Zn-3I08lo6wOCW&usp=drive_copy",
      },
      {
        title: "MAC Lab Notes - Week 10",
        href: "https://drive.google.com/open?id=1vg_y3UMQrGKbVyulpUOtKTK-n0ltrq-Y&usp=drive_copy",
      },
    ],
  },
  {
    section: "BIA labs",
    items: [
      {
        title: "BIA Lab Notes - Week 1",
        href: "https://docs.google.com/presentation/d/1GG5X_iIbITdSMU4UTOQ5CfGvr9IWMj8O/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 2",
        href: "https://docs.google.com/presentation/d/1iyBhho0m-Pb1-unUVtTa3rVVPhU2mry6/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 3",
        href: "https://docs.google.com/presentation/d/1E56AJB2wXzgP1O6LGdELS4e9SFD-QPvw/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 4",
        href: "https://docs.google.com/presentation/d/1bWkmBbv8pvnF-e7qoZZ47t4L9OVUwbc2/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 5",
        href: "https://docs.google.com/presentation/d/1b-TfJHVaxIC-6v-PrmLXzuzuR-lB6YgF/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 6",
        href: "https://drive.google.com/open?id=16kaxLmdX6jI4XLwtJ-EhEOshQFPPbL2T&usp=drive_copy",
      },
      {
        title: "BIA Lab Notes - Week 7",
        href: "https://docs.google.com/presentation/d/1-PzPJuUvFesU4jG3NuNExgjg1RpQDKtn/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 8",
        href: "https://docs.google.com/presentation/d/1L6mRRa0mj_fOdJYkroaz5MHgNbL6zYZM/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 9",
        href: "https://docs.google.com/presentation/d/10huA6EmWvwyu_YRNbCIup4gkrUAvzyCn/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 10",
        href: "https://docs.google.com/presentation/d/10Vx8vtWBU--qmCEQ200OKOsYkFEEZ2jp/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 11",
        href: "https://docs.google.com/presentation/d/1NGLC_fejzGQzkZGbSi35cM-U_mKwzyd5/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
      {
        title: "BIA Lab Notes - Week 12",
        href: "https://docs.google.com/presentation/d/1pPtYcLq7KorlYX8GQ3JcY8ANpQm1cR_U/edit?usp=drive_link&ouid=103038811561126855181&rtpof=true&sd=true",
      },
    ],
  },
];

export const portfolioContent = {
  profile,
  experiences,
  studies,
  publications,
  contact,
  materials,
} as const;
