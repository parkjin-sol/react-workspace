import styled from "styled-components";

export const StyledP = styled.p`
    background-color :rgb(250, 184, 184);
    width: 500px;
    height : 200px;
    line-height : 200px;
    border : 1px dotted rgb(200, 100, 100);  
    cursor : pointer;

    &:hover {
       
        opacity : .65;
    }
`;

export const StyledBlueP = styled.p`
    background : blue;
    color: #fff;
    border: 1px solid #000;
`;