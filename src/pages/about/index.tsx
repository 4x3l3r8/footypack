import { appPara, companyPara, goalPara } from 'constants/about'
import React from 'react'
import AboutDetails from '~/components/About/AboutDetails'
import AboutHero from '~/components/About/AboutHero'
import AboutVideo from '~/components/About/AboutVideo'
import { Footer, NavBar } from '~/components/common'

const index = () => {

  return (
    <>
    <NavBar />
    <AboutHero />
    <AboutVideo />

    <AboutDetails title={companyPara.title} paragraph={companyPara.paragraph} />
    <AboutDetails title={appPara.title} paragraph={appPara.paragraph} />
    <AboutDetails title={goalPara.title} paragraph={goalPara.paragraph} />

    <Footer />
    </>
  )
}

export default index