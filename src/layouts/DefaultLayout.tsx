import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet></Outlet>
    </Fragment>
  )
}
