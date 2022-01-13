import {ContainerCardTrip, ContainerLoding, CardList} from './style'
import { useTripList , requestList} from '../../hooks/useTripList'
import { useHistory } from 'react-router'
import axios from "axios"
import {BASE_URL_API} from '../../constants/URL_API'

export const CardCandidateAdm = () => {
    const {trips, isLoading, requestList} = useTripList()
    const history = useHistory()

    const onClickDetails = (id) => {
        window.localStorage.setItem('id', id)
        history.push(`/admin/trips/${id}`)
    }
    const onClickDelete = (id) => {
        axios
        .delete(`${BASE_URL_API}guilherme-banu/trips/${id}`, 
        {
            headers: {auth:localStorage.getItem('token')}
        })
        .then((response) => {
             requestList()
        })
        
    }


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
                    {trips.map((trip) =>{
                        return (
                            <CardList key={trip.id}>
                                <h3>{trip.name}</h3>
                                <div>
                                    <button onClick={()=> onClickDelete(trip.id)}>Deletar</button>
                                    <button onClick={()=> onClickDetails(trip.id)}>Mais</button>
                                </div>
                            </CardList>
                        )
                    })}
                </ContainerCardTrip>
            )
        }
    }
    return renderizar()
    
}