import { useContext } from "react"
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteProps,
  Routes,
} from "react-router-dom"
import "./App.css"
import UserContextProvider, { UserContext } from "./contexts/user"

const authRoutes: RouteProps[] = [
  {
    path: "/",
    element: <>Login</>,
  },
]

const appRoutes: RouteProps[] = [
  {
    path: "/",
    element: <>Index</>,
  },
]

function App() {
  const userStore = useContext(UserContext)

  const routes = userStore?.user ? appRoutes : authRoutes

  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((r) => (
            <Route
              key={r.path}
              path={r.path}
              element={r.element}
            />
          ))}
          <Route
            path="/*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
