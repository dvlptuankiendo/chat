import { Dispatch, FC, PropsWithChildren, createContext, useState } from "react"

interface IUser {
  username: String
}

interface IUserStore {
  user: IUser | null
  setUser: Dispatch<React.SetStateAction<IUser | null>>
}

export const UserContext = createContext<IUserStore | null>(null)

const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
