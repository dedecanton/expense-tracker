import styled from "styled-components";

export const Table = styled.table`

    width: 100%;
    background-color: #FFF;
    padding:20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
    
    @media screen and (max-width:900px){
        margin: 20px auto;
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        max-width:90%;
        overflow:scroll;
    }
`;



export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px 0;
    text-align:left;
    
    @media screen and (max-width:900px){
        text-align: center;
    }
    
`;
