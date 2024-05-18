import styled from "styled-components"

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
`

export const Slider = styled.div`
  width: 60px;
  height: 34px;
  position: relative;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
`

export const SliderTrack = styled.div`
  background-color: #ccc;
  border-radius: 34px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const SliderThumb = styled.div<{ checked: boolean }>`
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: white;
  transition: transform 0.4s ease;
  transform: ${({ checked }) => (checked ? "translateX(26px)" : "translateX(0)")};
  top: 4px;
  left: ${({ checked }) => (checked ? "calc(100% - 26px)" : "4px")};
`
