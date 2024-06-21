import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function SettingIndex() {
  return (
    <div>
      All Settings

      <ul>
        <li><Link to="/admin/settings/general" >General</Link></li>
        <li><Link to="/admin/settings/theme">Theme</Link></li>
        <li><Link to="/admin/settings/site">Site</Link></li>
      </ul>

      <div>
        <h1>Content</h1>

        <Outlet/>
      </div>

    </div>
  )
}
