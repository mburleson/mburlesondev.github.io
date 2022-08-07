import * as React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import SocialContact from '../components/socialcontact'
import * as layoutStyles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
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

