import { createContext } from "react"
import Header from "./Header"

export const UserContext = createContext()
const App = () => {
  const user = {name : 'Siddartha' , role:'Admin'}
  return (
    <UserContext.Provider value={user}>
      <Header />
    </UserContext.Provider>
  )
}

export default App
