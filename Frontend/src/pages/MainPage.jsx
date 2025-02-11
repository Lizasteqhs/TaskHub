import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import SpinLoader from '../components/UI/Loaders/SpinLoader'

import styles from './MainPage.module.scss'

function MainPage({ setPageName }) {
  const navigate = useNavigate()

  useEffect(() => {
    setPageName('')
    if (!localStorage.getItem('userRole')) {
      navigate('/signIn', { relative: 'route' })
    } else if (localStorage.getItem('userRole') === 'student') {
      navigate('/student', { relative: 'route' })
    } else if (localStorage.getItem('userRole') === 'teacher') {
      navigate('/teacher', { relative: 'route' })
    }
  }, [])

  return (
    <div className={styles.mainPage}>
      <SpinLoader />
    </div>
  )
}

export default MainPage
