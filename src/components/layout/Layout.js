import React from 'react'
import MainNavigaton from './MainNavigation'
import classes from './Layout.module.css'

function Layout(props) {
  return (
    <React.Fragment>
          <MainNavigaton />
          <main className={classes.main}>
              {props.children}
          </main>     
    </React.Fragment>
  )
}

export default Layout