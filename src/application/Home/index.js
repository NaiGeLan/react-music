import React from 'react';
import { Top, Tabbar, TabbarItem } from './style';
import { Outlet,NavLink } from 'react-router-dom';
function Home (props) {
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">Web App</span>
        <span className="iconfont search">&#xe62b;</span>
      </Top>
      <Tabbar>
        <NavLink to="/recommend"><TabbarItem><span>推荐</span></TabbarItem></NavLink>
        <NavLink to="/singers"><TabbarItem><span>歌手</span></TabbarItem></NavLink>
        <NavLink to="/rank"><TabbarItem><span>排行榜</span></TabbarItem></NavLink>
      </Tabbar>
      

      <Outlet></Outlet>
    </div>
  )
}

export default React.memo (Home);
