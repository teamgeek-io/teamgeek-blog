/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = ({ author }) => {
  // Set these values by editing "siteMetadata" in gatsby-config.js
  const avatar = author?.featured?.childImageSharp?.fixed

  const name = author?.frontmatter?.name
  const twitter = author?.frontmatter?.twitter

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {name && (
        <>
          <div style={{ flex: 1 }}>
            <div className="bio-name">{name}</div>
            <div dangerouslySetInnerHTML={{ __html: author?.html }}></div>
          </div>
          <a href={`https://twitter.com/${twitter || ``}`}>
            <img src="/img/twitter.svg" width="25" />
          </a>
        </>
      )}
    </div>
  )
}

export default Bio
