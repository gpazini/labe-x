import { Container, ContainerHeader, Main } from './style'
import { useParams } from 'react-router'
import { CardTripsDetails } from '../../components/CardTripsDetails'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useTripListDetail} from '../../hooks/useTripList'
import {ButtonGoBack} from '../../components/ButtonGoBack'
import {ButtonLogout} from '../../components/ButtonLogout'

export const TripDetailsPage = () => {
    const params = useParams()
    useProtectedPage()
    const {trips} = useTripListDetail(params.id)
    return (
        <Container>
            <ContainerHeader>
                <h1>Detalhes da Viagem</h1>
                <ButtonGoBack />
                <ButtonLogout />
            </ContainerHeader>
            <Main>
                <CardTripsDetails tripsDetail={trips}/>
            </Main>
        </Container>
    )
}