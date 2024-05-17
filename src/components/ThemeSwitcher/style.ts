import styled from "styled-components"

export interface SliderProps {
  checked: boolean
}

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`

export const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.checked ? "#2196F3" : "#ccc")};
  transition: background-color 0.4s ease;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: transform 0.4s ease;
    border-radius: 50%;
    transform: ${props => (props.checked ? "translateX(26px)" : "translateX(0)")};
  }
`
