import React from "react";
import axios from 'axios'

const AuthContext = React.createContext()

const serverUrl = 'http://localhost:5000/api'
// const serverUrl = 'https://agroscape-server-967ee60b99c8.herokuapp.com/api'

export const AuthContextProvider = ({children}) => {

    const [email, setEmail] = React.useState(localStorage.getItem('email') || '')

    const [authError, setAuthError] = React.useState({
        error: false,
        message: ''
    })

    const Logout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        window.location.replace('/login')
    }

    const Login = async(email, password) => {
        try {
            setEmail(email)
            const res = await axios.post(`${serverUrl}/login`, {email, password})
            if(res.data.success){
                setAuthError({error: false, message: ''})
                localStorage.setItem('email', email)
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                console.log('login success')
                window.location.replace('/')
            }
        } catch (error) {
            console.log(error.response)
            setAuthError({error: true, message: error.response.data.message})
        }
    }

    const Signup = async(email, password, name, date, phone, address) => {
        try {
            console.log(email, password)
            setEmail(email)
            localStorage.setItem('email', email)
            const res = await axios.post(`${serverUrl}/signup`, {email, password, name, dob: date, phone, address})
            if(res.data.success){
                setAuthError({error: false, message: ''})
                window.location.replace('/login')
            }else{
                localStorage.removeItem('email')
                setAuthError({error: true, message: error.response.data.message})
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    
    return(
        <AuthContext.Provider value={{
            email,
            authError,
            Login,
            Logout,
            Signup
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => React.useContext(AuthContext)