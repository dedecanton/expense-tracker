import styled from "styled-components";

export const Container = styled.div`
    max-width:90%;
    background-color:#FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius:10px;
    padding:20px;
    margin-top:-40px;
    display: flex;
    align-items:center;

    @media screen and (max-width:900px){
        flex-direction:column;
    }
`;

export const MonthArea = styled.div`
    flex:1;
    display:flex;
    align-items:center;
`;

export const MonthArrow = styled.div`
    width:40px;
    text-align:center;
    font-size:25px;
    cursor:pointer;
`;

export const MonthTitle = styled.div`
    flex:1;
    text-align:center;
`;

export const ResumeArea = styled.div`
    flex:2;
    display:flex;
    
    @media screen and (max-width:900px){
        flex-direction: column;
        margin-top: 10px;
    }
`;