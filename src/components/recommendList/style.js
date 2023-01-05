import styled from "styled-components";
import style from '../../assets/global-style'

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    font-size: 1.2em;
    font-weight: 700;
    line-height: 2em;
    padding-left: 1em
  }

`
export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`

export const ListItem = styled.div`
  position: relative;
  width: 32%;
  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      border-radius: 3px;
      background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
    }
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      top: 2px;
      right: 2px;
      font-size: ${style["font-size-s"]};
      line-height: 1.2em;
      color: ${style["font-color-light"]};
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    overflow: hidden;
    margin-top: 2px;
    padding: 0 2px;
    height: 3.2em;
    text-align: left;
    font-size: ${style["font-size-s"]};
    line-height: 1.4;
    color: ${style["font-color-desc"]};
  }

`
