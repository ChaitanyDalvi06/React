import { useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './About.module.css'

function About() {

    let username=useSelector((state)=>state.user.value)

  return (
    <>
    <Navigation/>
    <div className={styles.container}>about {username}</div>
    </>
  )
}

export default About