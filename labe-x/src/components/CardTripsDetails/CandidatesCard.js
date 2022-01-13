import {CardCandidato, ContainerButton} from './style'
import axios from 'axios'
import {BASE_URL_API} from '../../constants/URL_API'

export const CandidatesCard = (props) => {
    const traveler = props.candidates
    const tripId = props.tripId
    const decideCandidate = (id, decide) => {
        const body = {
            approve: decide
        }
        axios
        .put(`${BASE_URL_API}guilherme-banu/trips/${tripId}/candidates/${id}/decide`, body,
        {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((response) => {
            
        })
    }

    return (
        <div>
            {traveler && traveler.candidates && traveler.candidates.map((data) => {
                return (
                    <CardCandidato key={data.id}>
                        <div>
                            <span>Nome: </span><span class="conteudo">{data.name}</span>
                        </div>
                        <div>
                            <span>Profissão: </span><span class="conteudo">{data.profession}</span>
                        </div>
                        <div>
                            <span>Idade: </span><span class="conteudo">{data.age} anos</span>
                        </div>
                        <div>
                            <span>País: </span><span class="conteudo">{data.country}</span>
                        </div>
                        <div class="description">
                            <span>Texto de Candidatura: </span><span class="conteudo">{data.applicationText}</span>
                        </div>
                        <ContainerButton>
                            <button onClick={() => decideCandidate(data.id, true)}>Aprovar</button>
                            <button onClick={() => decideCandidate(data.id, false)}>Reprovar</button>
                        </ContainerButton>
                    </CardCandidato>
                )
            })}
        </div>
    )
}