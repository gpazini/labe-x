import styled from "styled-components";

export const ContainerLoding = styled.div`
`

export const ContainerCardTrip = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        button {
            margin: 3px;
        }

    }

`
export const CardList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 320px;
    background: #1e1e1e;
    color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    margin: 5px;
    padding: 5px;
    
    h3 {
        margin: 5px;
        border-bottom: 1px dotted #fff;
        padding: 3px;
    }
    div {
        display: flex;
        flex-direction: row;
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