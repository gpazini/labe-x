import styled from "styled-components";

export const ContainerLoding = styled.div`
`

export const ContainerCardTrip = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;
    padding: 5px;
    width: 100VW;

`
export const ContainerTrip = styled.div`
    display: flex;
    flex-direction: column;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 5px 20px 5px 20px;
    padding: 10px;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;
    }
    span {
        color: #9e94a3;
        padding: 5px;
        text-align: justify;
    }
    .description {
        text-align: justify;
    }
    .conteudo {
        color: #bcb99e;
    }
`
export const ContainerCandidatos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #1e1e1e;
    border-radius: 10px;
    margin: 5px 20px 5px 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    padding: 10px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`
export const ContainerPendentes = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`

export const ContainerAprovados = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
`
export const CardCandidato = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    background-color: #0a1929;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 10px 10px 10px 0;
    padding: 10px;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
    span {
        color: #9e94a3;
        padding: 5px;
        text-align: justify;
    }
    .description {
        text-align: justify;
    }
    .conteudo {
        color: #bcb99e;
    }
`
export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    button {
        margin: 10px 5px 10px 5px;
        outline: none;
        display: block;
        border: 0;
        font-size: 16px;
        line-height: 1;
        padding: 10px 30px;
        border-radius: 30px;
        background: #343333;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s linear;
    }
    button:hover, focus{
        background: #656565;
    }
    button:active{
        background: #20262d ;
    }
`
export const CardCandidatoAprovado = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 100%;
    background-color: #0a1929;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 10px 10px 10px 0;
    padding: 10px;
    h3 {
        border-bottom: 1px dotted #fff;
        padding: 3px;

    }
    span {
        color: #9e94a3;
        padding: 5px;
        text-align: justify;
    }
    .description {
        text-align: justify;
    }
    .conteudo {
        color: #bcb99e;
    }
`