import React from'react';
import { 
  ListWrapper,
  ListItem,
  List
} from './style';
import { getCount } from '../../util/getCount';
import LazyLoad from 'parm-react-lazyload';
function RecommendList(props){
  const {recommendList} = props
  return (
    <ListWrapper>
      <h1 className='title'>推荐歌单</h1>
      <List>
        {
          recommendList.map((item, index) => {
            return (
              <ListItem key={item.id + index}>
                <div className='img_wrapper'>
                  <div className='decorate'></div>
                  <LazyLoad placeholder={<img alt='music' width="100%" height="100%" src={require('../../assets/music.png')}></img>}>
                    <img src={item.picUrl + "?param=300*300"} width="100%" height="100%" alt="music"></img>
                  </LazyLoad>
                  
                  <div className='play_count'>
                    <i className='iconfont play'>&#xe885;</i>
                    <span className='count'>{ getCount(item.playCount) }</span>
                  </div>
                </div>
                <div className='desc'>{item.name}</div>
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default React.memo(RecommendList)
