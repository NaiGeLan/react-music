import styled from "styled-components";
import style from '../../assets/global-style'

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  background: ${style["theme-color"]};
  &>span {
    line-height: 2em;
    color: #f1f1f1;
    font-size: 1.2em;
    &.iconfont {
      font-size: 1.3em
    }
  }
`
export const Tabbar = styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.active {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
export const TabbarItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
