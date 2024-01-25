import * as React from "react"
import { Link } from "gatsby"
import * as styles from './index.module.css'

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const moreLinks = [
  { text: "Linkedin", url: "https://linkedin.com/in/abhinav-gorantla" },
  {
    text: "Github",
    url: "https://github.com/AbhinavGor/",
  },
  {
    text: "Leetcode",
    url: "https://leetcode.com/AbhinavGorantla/",
  },
  {
    text: "Resume",
    url: "https://old.abhinavgorantla.me/abhinav_gorantla_resume.pdf",
  },
  {
    text: "Stuff i like to do",
    url: "page-2",
  },
]

const Header = ({ siteTitle }) => (
  <header
    style={{
      // margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
        fontSize: '1.2rem',
        fontWeight: 'bold',
      }}
    >
      {siteTitle}
    </Link>
    <div className={styles.header}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`} style={{padding:'0rem 1rem'}} target="_blank">{link.text}</a>
          {i !== moreLinks.length - 1 && <> | </>}
        </React.Fragment>
      ))}
    </div>
  </header>
)

export default Header
