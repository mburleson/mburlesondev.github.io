import * as React from 'react'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialContact from '../components/socialcontact'
import * as layoutStyles from './layout.module.css'



const Layout = ({ children }) => {
  return (
    <>
    <SEO />
    <div className={layoutStyles.container}>
      <Header></Header>
      <main>
        {children}
      </main>
      <SocialContact></SocialContact>
      <Footer></Footer>
    </div>
    </>
  )
}

export default Layout