import {Container, ContainerHeader, Main} from './style'
import { useHistory } from 'react-router'
import {CardListTrip} from '../../components/CardListTrip'
import {ButtonGoBack} from '../../components/ButtonGoBack'

export const ListTripsPage = () => {
    const history = useHistory()

    const goToApplicationForm = () => {
        history.push("/trips/application")
    }

    return (
        <Container>
            <ContainerHeader>
                <h1>Lista de Viagens</h1>
                <ButtonGoBack />
                <button onClick={goToApplicationForm}>Inscrever-se</button>
            </ContainerHeader>
            <Main>
                
                <CardListTrip />
            </Main>
        </Container>
    )
}