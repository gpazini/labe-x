import { useHistory } from 'react-router'

export const ButtonGoBack = () => {
    const history = useHistory()
    
    const goBack = () => {
        history.push('/')
    }
    return <button onClick={goBack}>Voltar</button>
    
}