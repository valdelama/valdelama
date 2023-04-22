import React from 'react'
import cn from 'classnames'
import Layout from 'src/components/Layout'
import Container from 'src/components/layout/Container'
import BodyCopy from 'src/components/BodyCopy'
import SEO from 'src/components/seo'
import Intro from 'src/components/layout/Intro'
import Content from 'src/components/layout/Content'
import Title from 'src/components/Title'
import * as styles from './Contact.module.scss'

export default function Component () {
  return (
  <Layout>
    <SEO title="Contact" metaDescription="Get in touch with Dan Winer" />
    <Content>
    <h2>Get in touch</h2>
      <p>
        Feel free to leave me a message below or connect on{' '}
        <a href="https://www.linkedin.com/in/danwiner/">LinkedIn</a>.
      </p>
      <form
        name="contact"
        method="post"
        action="/contact/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={styles.form}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <fieldset>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.input}
            required
          />
          <label htmlFor="first">Name</label>
          <div className={styles.after} />
        </fieldset>
        <fieldset>
          <input
            id="email"
            type="text"
            name="email"
            className={styles.input}
            required
          />
          <label htmlFor="email">Email</label>
          <div className={styles.after} />
        </fieldset>
        <fieldset>
          <textarea
            name="message"
            id="message"
            className={cn(styles.input, styles.message)}
            required
          />
          <label htmlFor="message">Message</label>
          <div className={styles.after} />
        </fieldset>
        <fieldset>
          <button type="submit">Send</button>
        </fieldset>
      </form>
    </Content>
  </Layout>
)}
