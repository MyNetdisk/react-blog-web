/** @format */

import React from 'react'
import Meta from './Meta'
import Header from './Header'
// import '../public/style/components/nav.css'

type Props = {
  indexBG: boolean
  children: React.ReactNode
}

const Layout = ({indexBG, children}: Props) => {
  return (
    <div id="layout" className="layout">
      <Meta />
      <Header indexBG={indexBG} />
      {children}
    </div>
  )
}
export default Layout
