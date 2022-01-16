import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import styled from 'styled-components';
const NavWrapper = styled.div`
background: #fff;
>ul{
    display: flex;
  >li{
     text-align: center;
    width: 25%;
    a{
       display: flex;
       align-items: center;
       flex-direction: column;
       color:#D8D8D8;
       padding: 4px 0;
      .icon{
        width: 22px;
        height: 22px;
        fill: #D8D8D8;
      }
      &.selected{
        color: #333;
        .icon{
          fill: #FE9C3C;
        }
      }
    }
  }
}`;
const Nav = () => {
  return<div>
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/AccountBook" activeClassName="selected">
            <Icon name="AccountBook-g"  />
            账本
          </NavLink>
        </li>
        <li>
          <NavLink to="/write"
             activeClassName="selected"
          ><Icon name="Write-g" />记一笔</NavLink>
        </li>
        <li>
          <NavLink to="/tags"
             activeClassName="selected"
          ><Icon name="Tags-g" />标签分类</NavLink>
        </li>
        <li>
          <NavLink to="/analysis"
             activeClassName="selected"
          ><Icon name="Analysis-g" />统计分析</NavLink>
        </li>
      </ul>
    </NavWrapper>
  </div>
 }

    export default Nav