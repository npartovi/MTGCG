import React from 'react'
import ColorForm from '../forms/ColorForm'
import CardList from '../cardList/CardList'

const Layout = () => {
  return (
    <div className="layout-container">
      <div className="side-bar">
        <ColorForm />
      </div>
      <div className="main-content">
        <CardList />
      </div>
    </div>
  )
}

export default Layout
