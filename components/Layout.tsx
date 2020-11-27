/** @format */

import React, {ReactEventHandler} from 'react'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'

type Props = {
  indexBG: boolean
  children: React.ReactNode
}

const Layout = ({indexBG, children}: Props) => {
  const getChildrenMsg = msg => {
    console.log(msg)
  }
  return (
    <div id="layout" className="layout">
      <Meta />
      <Nav />
      <Header indexBG={indexBG} getChildValue={getChildrenMsg} />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
