import styled from "styled-components";
import BackPlanet from '../../assets/universo.jpg'

export const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        margin: 5px;
    }
`
export const ContainerImg = styled.div`
    display: flex;
    height: 200px;
    width: 100%;
    align-items: center;
    background-image: url(${BackPlanet});
    background-position: center;
    background-size: cover;
`

export const ContainerButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        margin: 15px 10px 15px 10px;
        outline: none;
        display: block;
        border: 0;
        font-size: 16px;
        line-height: 1;
        padding: 10px 30px;
        border-radius: 30px;
        background: #1e1e1e;
        color: #ffffff;
        cursor: pointer;
        transition: all 0.3s linear;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
    button:hover, focus{
        background: #343333;
    }
    button:active{
        background: #282828;
    }
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`