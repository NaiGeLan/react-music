import React, {useEffect, useState} from 'react';
import Slider from '../../components/slider'
import { useSelector, useDispatch } from 'react-redux'
import  {getBanner, getRecommend}  from '../../store/features/getRecommendList';
import RecommendList from '../../components/recommendList'
import Scroll from '../../components/scroll'
import { Content } from './style'
import { forceCheck } from 'parm-react-lazyload';
import  Loading  from '../../components/loading'
function Recommend (props) {
  const dispatch = useDispatch()
  const bannerList = useSelector((state) => state.recommend.bannerList)
  const recommendList = useSelector((state) => state.recommend.recommendList)
  const loading = useSelector((state) => state.recommend.loading)
  useEffect( () => {
    async function getData(){
      dispatch(await getBanner())
      dispatch(await getRecommend())
    }
    getData()
  },[])
  
  return (
    <Content>
      { loading ? (<Loading></Loading>) : null }
      <Scroll className="list" onScroll={forceCheck}>
        <div>
          <Slider bannerList={bannerList}></Slider>
          <RecommendList recommendList={recommendList}></RecommendList>
        </div>
      </Scroll>
      
    </Content>
  )
}

export default React.memo (Recommend);
