import styled from "styled-components"

export const InputPersonalizado = styled.input`
  background: ${props => props.theme.backgroundText};
  border-radius: 5px;
  color: ${props => props.theme.inputTextColor};
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  padding: 10px;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
`
