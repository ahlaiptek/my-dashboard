import { Fragment } from 'react'
import Jumbotron from '../../partials/Jumbotron'
import { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Index = () => {
  const { setNavTitle } = useContext(AppContext)
  setNavTitle('My Dashboard')

  return (
    <Fragment>
      <Jumbotron />
      <h1>Home</h1>
    </Fragment>
  )
}

export default Index
