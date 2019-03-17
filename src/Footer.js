import React from 'react'
import LeanJSLogo from './LeanJSLogo'
import Link from './Link'

const Footer = () => (
  <div className="footer">
    <ul>
      <li>
      <Link to="https://reactjs.academy" title="ReactJS Academy" />
        {/* <a target="_blank" href="https://reactjs.academy">ReactJS Academy</a> */}
      </li>
      <li>
        by
      </li>
      <li>
      <Link to="https://leanjs.com" title={<LeanJSLogo width={25} />} />
      </li>
    </ul>
  </div>
)

export default Footer
