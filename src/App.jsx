import { Navigate } from "react-router-dom"
import { NavBar } from "./routes/components/NavBar"
import { Routes, Route } from 'react-router-dom'
import { HomeScreen } from "./routes/HomeScreen"
import { AboutScreen} from "./routes/AboutScreen"
import { ContactScreen } from "./routes/ContactScreen";
import { UsuarioProvider } from "./routes/context/UsuarioProvider"
import { LoginScreen } from "./routes/context/LoginScreen"

export const App = () => {
    return (
        <UsuarioProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path= '/' element= { <HomeScreen></HomeScreen> }></Route>
                <Route path= '/login' element= { <LoginScreen></LoginScreen> }></Route>
                <Route path= '/about' element= { <AboutScreen></AboutScreen> }></Route>
                <Route path= '/contact' element= { <ContactScreen></ContactScreen> }></Route>
                <Route path= '/*' element= {<Navigate to='/'></Navigate> }></Route>
            </Routes>
        </UsuarioProvider>
    )
}


