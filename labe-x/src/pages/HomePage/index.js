import {ContainerHomePage, ContainerButton, ContainerImg, Main} from './style'
import { useHistory } from 'react-router'
import { CardHome } from '../../components/CardHome'
export const HomePage = () => {
    const history = useHistory()

    const goToAdmArea = () => {
        history.push("/login")
    }
    const goToTrips = () => {
        history.push("/trips/list")
    }
    

    return (
        <ContainerHomePage>
                <ContainerImg />
                <h1>Labex - Onde as viagens são de outro planeta </h1>
                <ContainerButton>
                    <button onClick={goToAdmArea}>Área Administrativa</button>
                    <button onClick={goToTrips}>Ver Viagens</button>
                </ContainerButton>
                <Main>
                    <CardHome />
                </Main>
        </ContainerHomePage>
    )
}