import MessageComponent from "./components/MessageComponent"
import UserCard from "./components/UserCard"
import withBackgroundColor from "./HOC/withBackgroundColor"
import withUpperCase from "./HOC/withUpperCase"

const ProfileCardComponent = withBackgroundColor(UserCard)
const UpperMessage = withUpperCase(MessageComponent)


const App = () => {
  return (
  <>
  <div>
    <ProfileCardComponent />
    <hr />
    <UpperMessage />
    <hr />


  </div>
  
  </>
  )
}

export default App
