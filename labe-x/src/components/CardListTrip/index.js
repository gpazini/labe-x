import {ContainerCardTrip, ContainerLoding, CardList, ContainerCard, ContainerImagens, Main} from './style'
import { useTripList } from '../../hooks/useTripList'
import Planet003 from '../../assets/planet_003.jpeg'
import Planet011 from '../../assets/planet_011.jpeg'
import Planet020 from '../../assets/planet_020.jpeg'
import Planet023 from '../../assets/planet_023.jpeg'

export const CardListTrip = () => {
    const {trips, isLoading} = useTripList()

    const renderizar = () => {
        if (isLoading) {
            return (
                <ContainerLoding>
                    <h1>Carregando...</h1>
                </ContainerLoding>
            )
        }
        else {
            return (
                <ContainerCardTrip>
                    <ContainerImagens>
                        <ContainerCard>
                            <img src={Planet003} alt='planet' />
                        </ContainerCard>
                        <ContainerCard>
                            <img src={Planet011} alt='planet' />
                        </ContainerCard>
                        <ContainerCard>
                            <img src={Planet020} alt='planet' />
                        </ContainerCard>
                        <ContainerCard>
                            <img src={Planet023} alt='planet' />
                        </ContainerCard>
                    </ContainerImagens>
                    <Main>
                        {trips.map((trip) =>{
                            return (
                                <CardList key={trip.id}>
                                    <h3>{trip.name}</h3>
                                    <div>
                                        <span>Planeta: </span><span class="conteudo">{trip.planet}</span>
                                    </div>
                                    <div>
                                        <span>Data: </span><span class="conteudo">{trip.date}</span>
                                    </div>
                                    <div>
                                        <span>Duração: </span><span class="conteudo">{trip.durationInDays} anos</span>
                                    </div>
                                    <div class="description">
                                        <span>Descrição: </span><span class="conteudo">{trip.description}</span>
                                    </div>
                                </CardList>
                            )
                        })}
                    </Main>
                </ContainerCardTrip>
            )
        }
    }
    return renderizar()
    
}