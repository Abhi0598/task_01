import React, { Component } from 'react'
import DashBoard from './DashBoard'
import SideBar from './SideBar'
export default class baseLayout extends Component {
  render() {
    return (
      <div>
          <SideBar />
          <DashBoard />
      </div>
    )
  }
}
