import { Container, ContainerHeader, Main } from './style'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {ButtonGoBack} from '../../components/ButtonGoBack'
import {ButtonLogout} from '../../components/ButtonLogout'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import {BASE_URL_API} from '../../constants/URL_API'

export const CreateTripPage = () => {
    useProtectedPage()
    const {form, onChange, cleanFields} = useForm(
        {
            name: "",
            planet: "", 
            date: "", 
            description: "", 
            durationInDays:"", 
        }
    )

    const ApplyToCreateTrip = (ev) => {
        ev.preventDefault()

        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }
        axios
        .post(`${BASE_URL_API}guilherme-banu/trips`, body, 
        {
            headers: {auth:localStorage.getItem('token')}
        })
        alert("Viagem criada com sucesso!")
        cleanFields();

    }

    return (
        <Container>
            <ContainerHeader>
                <h1>Criar Viagens</h1>
                <ButtonGoBack />
                <ButtonLogout />
            </ContainerHeader>
            <Main>
                <form onSubmit={ApplyToCreateTrip}>
                    <input 
                        name='name'
                        type='text'
                        value={form.name}
                        placeholder={'Nome'}
                        onChange={onChange}
                        required
                        pattern={'^.{5,}$'}
                        title={'O nome da viagem deve possuir mais de 5 caracteres'}
                    />
                    <select
                        name='planet'
                        value={form.planet}
                        onChange={onChange}
                        required 
                    >
                        <option>Escolha um Planeta</option>
                        <option value="Mercúrio">Mercúrio</option>
                        <option value="Vênus">Vênus</option>
                        <option value="Terra">Terra</option>
                        <option value="Marte">Marte</option>
                        <option value="Júpiter">Júpiter</option>
                        <option value="Saturno">Saturno</option>
                        <option value="Urano">Urano</option>
                        <option value="Netuno">Netuno</option>
                        <option value="Plutão">Plutão</option>
                        <option value="Éris">Éris</option>
                        <option value="Ceres">Ceres</option>
                        <option value="Haumea">Haumea</option>
                        <option value="Makemake">Makemake</option>
                    </select>
                    <input 
                        name='date'
                        type='date'
                        value={form.date}
                        placeholder={'Data'}
                        onChange={onChange}
                        required
                        min="2021-01-01"
                    />
                    <input 
                        name='description'
                        type='text'
                        value={form.description}
                        placeholder={'Descriçao da Viagem'}
                        onChange={onChange}
                        required
                        pattern={'^.{30,}$'}
                        title={'A descrição deve possuir mais de 30 caracteres'}
                    />
                    <input 
                        name='durationInDays'
                        type='number'
                        value={form.durationInDays}
                        placeholder={'Duração em Dias'}
                        onChange={onChange}
                        required
                        min={50}
                    />
                    <button>Enviar</button>
                </form>
            </Main>
        </Container>
    )
}