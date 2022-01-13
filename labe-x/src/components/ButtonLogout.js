import { useHistory } from 'react-router'

export const ButtonLogout = () => {
    const history = useHistory()
    
    const logout = () => {
        localStorage.removeItem('token')
        history.push('/login')
    }
    return <button onClick={logout}>Sair</button>
    
}