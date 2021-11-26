import styled from "styled-components";

export const TableLine = styled.tr``;

export const TableColumn = styled.td`
    padding: 10px 0;
`;

export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    background: ${props => props.color};
    

    @media screen and (max-width:900px){
        margin: auto 10px
    }
`

export const Value = styled.div<{ color: string }>`
    color:${props => props.color};
    padding:10px;

`

export const Button = styled.button`
    height: 30px;
    padding: 5px 10px;
    border:none;
    border-radius: 5px;
    background-color: #ffcccb;
    color: black;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
    
`;