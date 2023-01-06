import React, {useEffect, useState} from 'react';
import Slider from '../../components/slider'
import { useSelector, useDispatch } from 'react-redux'
import  {getBanner, getRecommend}  from '../../store/features/getRecommendList';
import RecommendList from '../../components/recommendList'
import Scroll from '../../components/scroll'
import { Content } from './style'

function Recommend (props) {
  const dispatch = useDispatch()
  const bannerList = useSelector((state) => state.recommend.bannerList)
  const recommendList = useSelector((state) => state.recommend.recommendList)
  useEffect( () => {
    async function getData(){
      dispatch(await getBanner())
      dispatch(await getRecommend())
    }
    getData()
  },[])
  
  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
    </Content>
  )
}

export default React.memo (Recommend);
