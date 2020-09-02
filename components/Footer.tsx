/** @format */

import React from 'react'
import '../public/style/components/footer.css'

const Footer = () => {
  return (
    <div className="footer-div">
      <div>系统由 React+Node+Ant Desgin驱动 </div>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer">
        Powered by
        <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      </a>
    </div>
  )
}
export default Footer
