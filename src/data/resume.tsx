import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "David Lepot",
  initials: "DL",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/huntington",
  description:
    "Full Stack Developer, I love coding & gaming",
  summary:
    "A Full Stack Developer is a software engineer proficient in both front-end and back-end development. They work with a wide range of technologies to build complete web applications, handling everything from user interfaces to databases and server management.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "Django",
    "Flask",
    "Go",
    "Postgres",
    "MongoDB",
    "Goole Cloud",
    "Firebase",
    "Docker",
    "Kubernetes",
    "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "lepotintel213@gmail.com",
    tel: "+13854190829",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/spreadmycode",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/david-lepot/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:lepotintel213@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Cleveroad",
      href: "https://www.cleveroad.com/",
      badges: [],
      location: "Remote",
      title: "Sr Full Stack Engineer",
      logoUrl: "https://rest.techbehemoths.com/storage/images/users/main/company-avatar-647ef0ce14241-x2.png",
      start: "Sep 2022",
      end: "Present",
      description:""
    },
    {
      company: "OAK's LAB",
      badges: [],
      href: "https://www.oakslab.com/",
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/oakslab.svg",
      start: "Feb 2021",
      end: "Jul 2022",
      description:
        ""
    },
    {
      company: "Twitter",
      href: "https://x.com/",
      badges: [],
      location: "San Francisco, CA, United States",
      title: "Software Developer",
      logoUrl: "/twitter.svg",
      start: "May 2017",
      end: "Dec 2020",
      description:
      ""
    },
    {
      company: "Fire Flower Apps",
      href: "https://fireflower.io",
      badges: [],
      location: "Montreal, QC, Canada",
      title: "Web Developer",
      logoUrl: "https://fireflower.io/wp-content/themes/truemarket/assets/src/images/home/logo-vertical.svg",
      start: "July 2016",
      end: "March 2017",
      description:
        "",
    }
  ],
  education: [
    {
      school: "Concordia University",
      href: "https://www.concordia.ca/",
      degree: "IB Diploma",
      logoUrl: "https://www.concordia.ca/etc/designs/concordia/clientlibs/img/logo-50.svg",
      start: "2012",
      end: "2016",
    },
  ],
  projects: [
    {
      title: "TapGP",
      href: "https://tapgp.co.uk/",
      active: true,
      description:
        "TapGP is a UK-based online healthcare service offering same-day video and telephone consultations with NHS-trained GPs. It provides prescriptions, referrals, and sick notes, with appointments available daily from 8 AM to 10 PM.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Twillip API",
        "NestJS"
      ],
      links: [
        {
          type: "Website",
          href: "https://tapgp.co.uk/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/tapgp.png",
      video:
        "",
    },
    {
      title: "Koralgo",
      href: "https://koralgo.com/",
      active: true,
      description:
        "Koralgo is a travel planning platform that offers personalized itineraries by researching activities and accommodations based on user preferences. It aims to simplify travel planning by providing comprehensive and trustworthy data, allowing users to generate free itineraries tailored to their interests.",
      technologies: [
        "Next.js",
        "Typescript",
        "Firebase",
        "Node.js",
        "TailwindCSS",
        "Stripe"
      ],
      links: [
        {
          type: "Website",
          href: "https://koralgo.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/projects/koralgo.png",
      video: "",
    },
    {
      title: "PlexTrac",
      href: "https://plextrac.com/",
      active: true,
      description:
        "PlexTrac is a cybersecurity platform that helps teams manage and track security assessments, reports, and vulnerabilities in real time. The platform offers a comprehensive dashboard, analytics, and reporting capabilities to streamline security workflows.",
      technologies: [
        "React.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Django",
        "NestJS",
        "Python",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://plextrac.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/plextrac.png",
      video: "",
    },
    {
      title: "Blip Driver",
      href: "https://blip-driver.com/",
      active: true,
      description:
        "Blip Driver is supply chain platform empowering Drivers to Earn More with Innovative Delivery Solutions",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Next UI",
        "Redis",
        "Stripe",
        "Flask",
        "Express"
      ],
      links: [
        {
          type: "Website",
          href: "https://blip-driver.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/blip.png",
      video:
        "",
    },
  ],
} as const;
