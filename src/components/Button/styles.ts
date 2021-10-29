import styled from "styled-components";

interface ContainerProps{
    whiteSchema:boolean
}

export const Container = styled.button<ContainerProps>`
    background: ${props=>props.whiteSchema? "#232c33" : "#2b718c"};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    top: 30%;
    left: 5%;
    color: #f5f5f5;
    font-size: 1em;
    padding: 5px;
    border: 2px solid transparent;
    border-radius: 3px;
    cursor: pointer;

`