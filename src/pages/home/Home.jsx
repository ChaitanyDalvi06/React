import { useDispatch, useSelector } from 'react-redux'
import Navigation from '../../components/navigation/Navigation'
import styles from './Home.module.css'
import { changeName } from '../../slices/userSlice'

function Home() {

  let username = useSelector((state) => { return state.user.value })

  let dispatch=useDispatch()

  return (

    <>
      <Navigation></Navigation>
      <div className={styles.container}>Home {username}
      <button onClick={()=>{
        dispatch(changeName("Chaitaya Dalvi"))
      }}>Change Redux</button>
      </div>




    </>


  )
}

export default Home