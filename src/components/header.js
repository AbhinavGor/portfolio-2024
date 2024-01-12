import * as React from "react"
import { Link } from "gatsby"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const moreLinks = [
  { text: "Linkedin", url: "https://linkedin.com/in/abhinav-gorantla" },
  {
    text: "Github",
    url: "https://github.com/AbhinavGor/",
  },
  {
    text: "Leetcode",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Resume",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Stuff i like to do",
    url: "https://www.gatsbyjs.com/contributing/",
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
    <div style={{display: `flex`, justifyContent: `space-around`}}>
      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}${utmParameters}`} style={{padding:'0rem 1rem'}}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> | </>}
        </React.Fragment>
      ))}
    </div>
  </header>
)

export default Header