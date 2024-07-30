import styled from "styled-components"

export const InputAreaPersonalizado = styled.textarea`
  box-sizing: border-box;
  background: ${props => props.theme.backgroundText};
  color: ${props => props.theme.inputTextColor};
  border-radius: 5px;
  resize: none;
  height: 450px;
  padding: 10px;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`
