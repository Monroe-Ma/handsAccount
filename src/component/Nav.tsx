import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
const Nav = () => {
  return<div>
        <nav>
          <ul>
        <li>
         
              <NavLink to="/"> <Icon name="Analysis-g"/>账本</NavLink>
            </li>
        <li>
          
              <NavLink to="/write">记一笔</NavLink>
            </li>
            <li>
              <NavLink to="/tags">标签分类</NavLink>
            </li>
            <li>
              <NavLink to="/analysis">统计分析</NavLink>
            </li>
            </ul>
        </nav>
        </div>
 }

    export default Nav