import styled from "styled-components";
import style from '../../assets/global-style'

export const List = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 2em;
  >span:first-of-type {
    display: block;
    flex: 0 0 auto;
    padding: 0.5em 0;
    margin-right: 0.5em;
    color: gray;
    font-size: ${style["font-size-m"]};
  }
`

export const ListItem = styled.span`
  flex: 0 0 auto;
  font-size: ${style["font-size-m"]};
  padding: 0.5em 0.8em;
  border-radius: 1em;
  &.selected {
    color: ${style["theme-color"]};
    border: 1px solid ${style["theme-color"]};
    opacity: 0.8;
  }
`
