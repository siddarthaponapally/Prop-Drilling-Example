import { useContext } from "react"
import { UserContext } from "./App"

const Header = () => {
    const user = useContext(UserContext)
    const {name,role} = user
  return (
    <div>
      <p> Welcome , {name} ({role})</p>
    </div>
  )
}

export default Header
