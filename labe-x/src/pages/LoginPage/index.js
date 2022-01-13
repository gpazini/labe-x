import {Container, ContainerHeader, Main} from './style'
import { useHistory } from 'react-router'
import { useForm } from '../../hooks/useForm'
import axios from 'axios'
import {BASE_URL_API} from '../../constants/URL_API'
import { useEffect } from 'react'
import {ButtonGoBack} from '../../components/ButtonGoBack'

export const LoginPage = () => {
    const {form, onChange, cleanFields} = useForm({email: "", password: ""})
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token != null) {
            history.push('/admin/trips/list')
        }
    }, [])

    const fazerLogin = async (ev) => {
        ev.preventDefault();
        
        const body = {
            email: form.email,
            password: form.password
        }
        axios
        .post(`${BASE_URL_API}guilherme-banu/login`, body)
        .then((response) => {
            window.localStorage.setItem('token', response.data.token)
            history.push('/admin/trips/list')
        })
        .catch((error) => {
            alert(error.response.data.message + ". Favor tentar novamente!")
            cleanFields();
        })
        
    }

    return (
        <Container>
            <ContainerHeader>
                <h1>Área Administrativa</h1>
                <ButtonGoBack />
            </ContainerHeader>
            <Main>
                <h1>Fazer Login: </h1>
                <form onSubmit={fazerLogin}> 
                    <input 
                        name='email'
                        type='email'
                        value={form.email}
                        placeholder={'E-mail'}
                        onChange={onChange}
                        required
                    />
                    <input 
                        name='password'
                        type='password'
                        value={form.password}
                        placeholder={'Senha'}
                        onChange={onChange}
                        required
                        pattern={'^.{4,}$'}
                        title={"Sua Senha deve ter no mínimo 4 caracteres"}
                    />
                    <button>Entrar</button>
                </form>
            </Main>
        </Container>
    )
}