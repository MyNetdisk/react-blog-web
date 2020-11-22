/** @format */

import React from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

type Props = {
  indexBG: boolean
  children: React.ReactNode
}

const Layout = ({indexBG, children}: Props) => {
  return (
    <div id="layout" className="layout">
      <Meta />
      <Nav />
      <Header indexBG={indexBG} />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
