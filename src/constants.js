// Content
import ContactSection from "./components/section/Contact.vue";
import VeilifySection from "./components/section/Veilify.vue";
import SkillsSection from "./components/section/Skills.vue";
import WelcomeSection from "./components/section/Welcome.vue";
import WorkSection from "./components/section/Work.vue";

// Images
import ContactImage from "./components/supporting-image/Contact.vue";
import VeilifyImage from "./components/supporting-image/Veilify.vue";
import SkillsImage from "./components/supporting-image/Skills.vue";
import WelcomeImage from "./components/supporting-image/Welcome.vue";
import WorkImage from "./components/supporting-image/Work.vue";

// Icons
import ContactIcon from "./assets/icons/Contact.svg";
import VeilifyIcon from "./assets/icons/Veilify.svg";
import SkillsIcon from "./assets/icons/Skills.svg";
import WorkIcon from "./assets/icons/Work.svg";

// SKills Icons

import FastApiIcon from "./assets/icons/skills/fastapi.svg";
import FlaskIcon from "./assets/icons/skills/flask.svg";
import DjangoIcon from "./assets/icons/skills/django.svg";
import VueJsIcon from "./assets/icons/skills/vuejs.svg";
import ReactJsIcon from "./assets/icons/skills/reactjs.svg";

import PythonIcon from "./assets/icons/skills/python.svg";
import JavaScriptIcon from "./assets/icons/skills/javascript.svg";
import ClangIcon from "./assets/icons/skills/clang.svg";
import CppLangIcon from "./assets/icons/skills/cpplang.svg";
import JavaIcon from "./assets/icons/skills/java.svg";

import ElasticsearchIcon from "./assets/icons/skills/elasticsearch.svg";
import PostgreSQLIcon from "./assets/icons/skills/postgres.svg";
import OracleIcon from "./assets/icons/skills/oracle.svg";

import AwsIcon from "./assets/icons/skills/aws.svg";
import DockerIcon from "./assets/icons/skills/docker.svg";
import HadoopIcon from "./assets/icons/skills/hadoop.svg";
import SparkIcon from "./assets/icons/skills/spark.svg";

export const Months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const Sections = new Map([
  [
    "WELCOME",
    {
      color: "#E54849",
      content: WelcomeSection,
      image: WelcomeImage,
      title: null,
    },
  ],
  [
    "SKILLS",
    {
      color: "#DE9D36",
      content: SkillsSection,
      icon: SkillsIcon,
      image: SkillsImage,
      title: "Skills",
    },
  ],
  [
    "WORK",
    {
      color: "#729974",
      content: WorkSection,
      icon: WorkIcon,
      image: WorkImage,
      title: "Work",
    },
  ],
  [
    "VEILIFY",
    {
      color: "#AB58A4",
      content: VeilifySection,
      icon: VeilifyIcon,
      image: VeilifyImage,
      title: "Veilify",
    },
  ],
  [
    "CONTACT",
    {
      color: "#002D40",
      content: ContactSection,
      icon: ContactIcon,
      image: ContactImage,
      title: "Contact",
    },
  ],
]);

export const Skills = new Map([
  [
    "PROGRAMMING-LANGUAGES",
    {
      icon: null,
      title: "Programming",
      skills: [
        {
          icon: PythonIcon,
          name: "Python",
        },
        {
          icon: JavaScriptIcon,
          name: "JavaScript",
        },
        {
          icon: ClangIcon,
          name: "C",
        },
        {
          icon: CppLangIcon,
          name: "C++",
        },
        {
          icon: JavaIcon,
          name: "Java",
        },
      ],
    },
  ],
  [
    "FRAMEWORKS",
    {
      icon: null,
      title: "Frameworks",
      skills: [
        {
          icon: FastApiIcon,
          name: "FastAPI",
        },
        {
          icon: FlaskIcon,
          name: "Flask",
        },
        {
          icon: DjangoIcon,
          name: "Django",
        },
        {
          icon: VueJsIcon,
          name: "Vue.js",
        },
        {
          icon: ReactJsIcon,
          name: "React.js",
        },
      ],
    },
  ],
  [
    "DATABASES",
    {
      icon: null,
      title: "Databases",
      skills: [
        {
          icon: ElasticsearchIcon,
          name: "Elasticsearch",
        },
        {
          icon: PostgreSQLIcon,
          name: "PostgreSQL",
        },
        {
          icon: OracleIcon,
          name: "Oracle",
        },
      ],
    },
  ],
  [
    "CLOUD-DEVOPS-BIGDATA",
    {
      icon: null,
      title: "Cloud, DevOps & Big Data",
      skills: [
        {
          icon: AwsIcon,
          name: "AWS",
        },
        {
          icon: DockerIcon,
          name: "Docker",
        },
        {
          icon: HadoopIcon,
          name: "Hadoop",
        },
        {
          icon: SparkIcon,
          name: "Spark",
        },
      ],
    },
  ]
]);

export const SectionKeys = Array.from(Sections.keys());
export const SkillKeys = Array.from(Skills.keys());
