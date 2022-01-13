import styled from "styled-components";

export const ContainerLoding = styled.div`
`

export const ContainerCardHome = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
        row-gap: 20px;
        column-gap: 20px;
    }
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100px;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 5px;
    img {
        width: 100%;
        border-radius: 10px;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        img {
            width: 100px;
        }
    }
`