import { useState } from 'react'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'

const Index = () => {
  const { setNavTitle } = useContext(AppContext)
  useState(() => {
    setNavTitle('Snippet')
  }, [setNavTitle])
  
  return (
    <h6>asdsa</h6>
  )
}

export default Index
