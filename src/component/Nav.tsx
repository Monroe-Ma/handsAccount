import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import styled from 'styled-components';
const NavWrapper = styled.div`
background: #fff;
>ul{
  display: flex;
  >li{
    width: 20%;
    a{
      color:#D8D8D8;
      text-align: center;
      .icon{
  
        width: 44px;
        height: 44px;
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
          <NavLink to="/" activeClassName="selected">
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