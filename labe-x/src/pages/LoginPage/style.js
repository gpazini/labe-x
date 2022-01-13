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
    margin: 10px;
    width: 70vw;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    padding: 15px;

    h1 {
        margin: 5px;

    }
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    select, input, option {
        width: 90%;
        margin: 5px;
        padding: 10px 0;
        border-radius: 20px;
        text-indent: 10px;
        
    }
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