import Login from '../Login/Login.page'
import Registration from '../Registration/Registration.page'

const Authentication = () => {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Login />
      <Registration />
    </div>
  )
}

export default Authentication
