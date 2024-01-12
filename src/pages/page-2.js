import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Stuff I like to do</h1>
    <ol>
      <li>I like to run. <a href="https://www.strava.com/athletes/43863750">This</a> is my strava.</li>
      <li>I have a passion for photography, you can discover my portfolio on Unsplash <a href="https://unsplash.com/@abhinavgorantla">here</a>.</li>
    </ol>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Hobbies" />

export default SecondPage
