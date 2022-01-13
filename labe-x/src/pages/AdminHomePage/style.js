import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: static;
    top: 0;
    border-bottom: 1px solid;
    width: 100%;
    margin-bottom: 3px;
    padding: 3px;
    h1 {
        flex-grow: 1;
        padding: 3px;
        margin: 3px;
    }
    button {
        margin: 0 5px 0 5px;
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
    }
    button:hover, focus{
        background: #343333;
    }
    button:active{
        background: #282828;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        button {
            margin: 3px;
        }

    }
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`