import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { Link } from 'gatsby'
import cn from 'classnames'
import ArrowLink from 'src/components/ArrowLink'
import SmallTitle from 'src/components/SmallTitle'
import styles from './Title.module.scss'

export default ({ title, subheader, backLink }) => (
  <div className={styles.wrapper}>
    <ScrollAnimation animateIn="fadeIn" duration={0.3} delay={150} animateOnce>
      {!backLink && <SmallTitle className={styles.title} content={title} />}
      {backLink && (
        <ArrowLink
          url={backLink}
          text={title}
          className={styles.titleBackLink}
          back
        />
      )}
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeIn" duration={0.3} delay={350} animateOnce>
      <h2 className={styles.subheader}>{subheader}</h2>
    </ScrollAnimation>
  </div>
)
