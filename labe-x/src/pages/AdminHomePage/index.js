import { Container, ContainerHeader, Main } from './style'
import { useHistory } from 'react-router'
import { CardCandidateAdm } from '../../components/CardCandidateAdm'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {ButtonGoBack} from '../../components/ButtonGoBack'
import {ButtonLogout} from '../../components/ButtonLogout'

export const AdminHomePage = () => {
    const history = useHistory()
    useProtectedPage()
    
    const goToCreateTripPage = () => {
        history.push('/admin/trips/create')
    }
    
    return (
        <Container>
            <ContainerHeader>
                <h1>Painel Administrativo - Viagens</h1>

                <ButtonGoBack/>
                <button onClick={goToCreateTripPage}>Criar Viagens</button>
                <ButtonLogout />
            </ContainerHeader>
            <Main>
                <CardCandidateAdm />
            </Main>
        </Container>
    )
}