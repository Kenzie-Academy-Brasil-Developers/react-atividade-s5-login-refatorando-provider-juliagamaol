import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
export const Content = styled.div`
    @media(min-width:910px){
        max-width: 228px;
        height: 320px;
    }
    background: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid transparent;
    box-shadow: 6px 2px 11px -3px rgba(0,0,0,0.72);
    max-width: 220px;
    height: 320px;
    border-radius: 5px;
    padding: 2%;

    form{
        height: 15vh;
        width: 90%; 
    }

`