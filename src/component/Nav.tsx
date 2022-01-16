import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import styled from 'styled-components';
const NavWrapper = styled.div`
background: #fff;
>ul{
  display: flex;
  >li{
    width: 25%;
    a{
    text-align: center;
      .icon{
        display: block;
        width: 44px;
        height: 44px;
      }
      &.selected{
        color: red;
        .icon{
          fill:red;
          color: red;

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
          <NavLink to="/"
            className = { ({ isActive }) => isActive ? "selected" : '' }
          >
            <Icon name="AccountBook-g" />
            账本
          </NavLink>
        </li>
        <li>
          <NavLink to="/write"
             className = { ({ isActive }) => isActive ? "selected" : '' }
          ><Icon name="Write-g" />记一笔</NavLink>
        </li>
        <li>
          <NavLink to="/tags"
               className = { ({ isActive }) => isActive ? "selected" : '' }
          ><Icon name="Tags-g" />标签分类</NavLink>
        </li>
        <li>
          <NavLink to="/analysis"
               className = { ({ isActive }) => isActive ? "selected" : '' }
          ><Icon name="Analysis-g" />统计分析</NavLink>
        </li>
      </ul>
    </NavWrapper>
  </div>
 }

    export default Nav