/** @format */

import React, {useState, useEffect} from 'react'
import Meta from './Meta'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

type Props = {
  indexBG?: boolean
  children: React.ReactNode
}

const Layout = ({indexBG, children}: Props) => {
  const [navShow, setnavShow] = useState(false)
  const getChildrenMsg = msg => {
    setnavShow(msg)
    if (msg) {
      document.querySelector('body').style.cssText = 'position: relative; width: calc(100% - 17px);overflow:hidden;'
    } else {
      document.querySelector('body').style.cssText = ''
    }
  }
  return (
    <div id="layout" className="layout">
      <Meta />
      <Nav navShow={navShow} getChildValue={getChildrenMsg} />
      <Header indexBG={indexBG} getChildValue={getChildrenMsg} />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
