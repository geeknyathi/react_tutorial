import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from "./Navbar.module.css";

export default function Navbar() {

  const navItems = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'Contact',
      to: '/contact',
    },
    {
      title: 'Admin',
      to: '/admin/dashboard',
    },
 

  ];

  function renderNavItems() {
    return navItems.map((navItem) => (
      <li key={navItem.title}>
        <Link to={navItem.to} > {navItem.title} </Link>
        {/* <a href={navItem.href}>{navItem.title}</a> */}
      </li>
    ))
  }

  return (
    <nav className={css.nav}>
      <ul>
        {renderNavItems()}
      </ul>

    </nav>
  )
}
