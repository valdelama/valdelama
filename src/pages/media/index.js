import React from 'react'
import Layout from 'src/components/Layout'
import Content from 'src/components/layout/Content'
import SEO from 'src/components/seo'
import ExternalLink from 'src/components/ExternalLink'
import * as styles from './Media.module.scss'

export default function Component ({ data }) {
  return(
  <Layout>
    <SEO
      title="Media"
      metaDescription="Dan Winer's writing, interviews and podcast appearances"
    />
    <Content>
      <h2>Articles, interviews, and podcasts</h2>
      <div className={styles.wrapper}>

      <ExternalLink 
        url="https://designmba.show/" 
        title="Career progression tips for product designers"
        type="Podcast"
        location="Design MBA"
        unreleased
      />

      <ExternalLink 
        url="https://www.linkedin.com/feed/update/urn:li:activity:7095009958122987520/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7095009958122987520%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29" 
        title="A simple system for complex problems"
        type="Post"
        location="LinkedIn"
        date="Aug 9, 2023"
      />

      <ExternalLink 
        url="https://www.looppanel.com/blog/dan-winer-ux-advice" 
        title="Ask the Right Questions to Advance your UX Career"
        type="Guest article"
        location="Looppanel"
        date="Jun 22, 2023"
      />
      
      <ExternalLink 
        url="https://www.looppanel.com/blog/dan-winer-ux-advice" 
        title="Craft a winning UX designer resume"
        type="Guest article"
        location="Usability Hub"
        date="May 25, 2023"
      />

      <ExternalLink 
        url="https://www.looppanel.com/blog/dan-winer-ux-advice" 
        title="Sharing Research Reports"
        type="Guest article"
        location="Looppanel"
        date="Apr 13, 2023"
      />

      <ExternalLink 
        url="https://www.linkedin.com/feed/update/urn:li:activity:7031238119186149376/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7031238119186149376%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29" 
        title="Designers are being sold a lie"
        type="Post"
        location="LinkedIn"
        date="Feb 14, 2023"
      />

      <ExternalLink 
        url="https://www.linkedin.com/feed/update/urn:li:activity:7024701649344446464/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7024701649344446464%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29" 
        title="There are crucial skills outside of design to grow your career"
        type="Post"
        location="LinkedIn"
        date="Jan 27, 2023"
      />

      <ExternalLink 
        url="https://www.linkedin.com/feed/update/urn:li:activity:7013166923626496000/" 
        title="It's not your design skills you need to focus on"
        type="Post"
        location="LinkedIn"
        date="Dec 26, 2022"
      />


      </div>
    </Content>
  </Layout>
)}

export const Head = () => <body className="gradient" />
