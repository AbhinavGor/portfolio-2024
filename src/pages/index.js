import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: " Time Series forecasting using Enhanced GAFs",
    url: "#",
    description:
      "I applied Gramian Angular Fields to encode time series data, integrating it with a CNN for precise predictions on stock trends—assessing whether they would follow an upward or downward trajectory.",
  },
  {
    text: "Automatic Grader using NLP",
    url: "https://github.com/abhinavgor/ai-essay-autograd",
    description:
      "Built an NLP pipeline to extract various features from an essay like cosine similarity, Latent Semantic Analysis, TF IDF scores and Orthography (spell checking). These features were then used to score essays using different Machine Learning Algorithms. A comparative analysis was performed between these machine learning algorithms. Project documentation can be accessed here.",
  },
  {
    text: "Smart Parking Architecture using IoT",
    url: "https://drive.google.com/file/d/1-s5y2Cf95go4HA1bf-WU8jk31cO4_1c2/view?usp=sharing",
    description:
      "I made this project as a part of my IoT class during my Junior year at VIT. This project enables parking spaces to run automatically without any human interference.",
  },
  {
    text: "Spell Checker using TRIE Trees",
    url: "https://github.com/AbhinavGor/Spell-Checker-Using-TRIE-Trees",
    description:
      "Implemented BK Trees, TRIE Trees and Hash Tables data structures in C++ and provided a comparative study on their performance with respect to auto suggestions and correction of words. We developed this as a command line tool.",
  },
  {
    text: "agCLI",
    url: "https://github.com/AbhinavGor/agCLI",
    description:
      "I used Node.js, Commander.js, octokit.js, the GitHub API to build a command line tool which can update all the npm packages in a project and make a pull request to the GitHub repository with the version updates.",
  },
  {
    text: "The Weekly Edge",
    url: "https://github.com/AbhinavGor/tweBackendv1",
    description:
      "Built a back-end REST API with CRUD operations to post, edit and view articles written by members at THEPC - VIT. I also maintained this MERN stack project for 1.5 years and fixed bugs on the way. I also introduced new features like favouriting articles and a security question feature.",
  },
]

const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
  { text: "TypeScript", url: "using-typescript" },
  { text: "Server Side Rendering", url: "using-ssr" },
  { text: "Deferred Static Generation", url: "using-dsg" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div>
      <h1>
        Hi, I am Abhinav!
      </h1>
      <div className={styles.intro_flex}>
        <p className={styles.intro}>
          I am a computer science graduate student at Arizona State University, Tempe. I am interested in the fields of backend development, DevOps, artificial intelligence, and cloud computing, and I am striving to enhance my expertise in these fields. Currently, I am actively engaged in exploring the intricacies of backend technologies such as Django, while also delving into the vast possibilities of artificial intelligence across various applications. 
        </p>
        <div style={{ width: '12em', height: '9em', borderRadius: '100%', overflow: 'hidden', padding: '0', margin: '1em' }} className={styles.img}>
          <img src="https://avatars.githubusercontent.com/u/56104674?v=4" style={{margin: '0', padding: '0'}}/>
        </div>
      </div>
    </div>
    <div className="intro">
      <strong>P.S.</strong> To access the older version of this website, click <a href="https://old.abhinavgorantla.me" target="_blank">here</a>.
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
            target="_blank"
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
