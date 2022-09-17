import styled from '@emotion/styled';
export const OptionList = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;

`;

export const OptionItem = styled.li`
margin-right: 20px;
:last-child {
    margin-right:0
}
`;
export const OptionButton = styled.button`
background-color: teal;
border-radius: 15%;
border: 1px solid grey;
:hover {background-color: pink;
}
:focus {background-color: pink;
}
`;
