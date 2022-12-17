import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 8px;
`;

export const Label = styled.label`
font-weight: 500;
`;

export const Input = styled.input`
min-width: 400px;
padding: 8px;
border: 4px solid rgb(235,225,214);
`;

export const Button = styled.button`
font-size: 17px;
font-weight: 500;
width: 180px;
padding: 8px 30px;
background-color: rgb(235,225,214);
border: none;
border-radius: 5px;

&:hover {
    cursor: pointer;
}
`;

export const Wrap = styled.div`
display: flex;
align-items: center;
gap: 6px;
margin-bottom: 8px;
fill: #2a2a2a;
`;