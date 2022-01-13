import {ContainerCardTrip, ContainerTrip, ContainerLoding, ContainerCandidatos, ContainerPendentes, ContainerAprovados} from './style'
import { useTripListDetail } from '../../hooks/useTripList'
import { CandidatesCard } from './CandidatesCard'
import { ApprovedCard } from './ApprovedCard'

export const CardTripsDetails = (props) => {
    const {isLoading} = useTripListDetail()
    const trip = props.tripsDetail

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
                    <ContainerTrip>
                        <h3>{trip.name}</h3>
                        <div>
                            <span>Planeta: </span><span class="conteudo">{trip.planet}</span>
                        </div>
                        <div>
                            <span>Data: </span><span class="conteudo">{trip.date}</span>
                        </div>
                        <div>
                            <span>Duração: </span><span class="conteudo">{trip.durationInDays} dias</span>
                        </div>
                        <div class="description">
                            <span>Descrição: </span><span class="conteudo">{trip.description}</span>
                        </div>
                    </ContainerTrip>
            
                    <ContainerCandidatos>
                        <ContainerPendentes>
                            <h3>Candidatos Pendentes</h3>
                            <CandidatesCard 
                                candidates={trip}
                                tripId={trip.id}/>
                        </ContainerPendentes>

                        <ContainerAprovados>
                            <h3>Candidatos Aprovados</h3>
                            <ApprovedCard 
                                candidates={trip}/>
                        </ContainerAprovados>
                        
                    </ContainerCandidatos>
                </ContainerCardTrip>
            )
        }
    }
    return renderizar()
    
}