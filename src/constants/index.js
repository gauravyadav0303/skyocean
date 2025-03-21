import {
  mobile,
  backend,
  creator,
  web,
 company,
  one_piece,
  Port,
  restaurant,
  threejs,
  origintrail,
  docker,
  blockchain,
  eth,
  dkg,
  skyocean,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "SME Empowerment",
    icon: web,
  },
  {
    title: "Decentralized Finance",
    icon: mobile,
  },
  {
    title: "Transparent Trade",
    icon: backend,
  },
  {
    title: "Global Accessibility",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Origintrail",
    icon: origintrail,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Blockchain",
    icon: blockchain,
  },
  {
    name: "Ethereum",
    icon: eth,
  },
  {
    name: "DKG",
    icon: dkg,
  },
  {
    name: "Skyocean",
    icon: skyocean,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

];

const experiences = [
  {
    title: "Laying the Foundation for Decentralized Trade",
    icon: company,
    iconBg: "#000000",
    date: "Jan 2023 – Dec 2023",
    points: [
      "Conducted extensive research on blockchain-driven trade finance.",
      "Built key partnerships, including collaboration with OriginTrail for DKG V8 integration.",
      "Designed initial smart contract architecture to power decentralized trade financing.",
    ],
  },
  {
    title: "Building the SKYT Platform",
    icon: company,
    iconBg: "#000000",
    date: "Jan 2024 – Mar 2024",
    points: [
      "Finalized token structure and distribution model.",
      "Established OriginTrail DKG V8 integration architecture.",
      "Completed technical project framework and documentation.",
      "Defined customs system interoperability standards",
    ],
  },
  {
    title: "Validating the Concept",
    icon: company,
    iconBg: "#000000",
    date: "Apr 2024 – May 2024",
    points: [
        "Successfully completed the Proof of Concept (PoC) for decentralized trade finance.",
        "Implemented real-time supply chain tracking through OriginTrail’s DKG.",
        "Developed React.js & Web3-powered UI, enabling seamless platform interaction.",

    ],
  },
  {
    title: "MVP Launch: A New Era Begins",
    icon: company,
    iconBg: "#000000",
    date: "Coming Soon – Q2 2025",
    points: [
      "The SKYT MVP is ready to roll out, bringing SMEs and investors onto a decentralized, transparent trading ecosystem.",
      "Pilot programs set to launch in key markets, including Paraguay and Ghana.",
      "Preparing for global expansion, ensuring financial inclusion and trust in trade.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "ABC XYZ",
    designation: "India",
    company: "AXB",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "ABC XYZ",
    designation: "India",
    company: "BYD",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "ABC XYZ",
    designation: "India",
    company: "CZF",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "One Piece",
    description:
      "Created a dual-model answer retrieval tool for pinpointing queries within the extensive One Piece Anime Wiki fandom, showcasing expertise in machine learning, data science, and full-stack development. ",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "ML",
        color: "blue-text-gradient",
      },
      {
        name: "data_science",
        color: "green-text-gradient",
      },
    ],
    image: one_piece,
    source_code_link: "https://github.com/tushaar9560/OnePiece-Question-Answering",
  },
  {
    name: "Personal Portfolio",
    description:
      "Created a sleek and modern company portfolio template using Bootstrap, featuring a structurally solid foundation and stunning layouts.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "sliderjs",
        color: "pink-text-gradient",
      },
    ],
    image: Port,
    source_code_link: "https://github.com/",
  },
  {
    name: "Restaurant Template",
    description:
      "Developed a restaurant website template having 8+ pages using HTML, CSS, and JavaScript, creating a seamless and engaging online presence that effectively showcases a restaurant’s offerings and enhances user experience",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
