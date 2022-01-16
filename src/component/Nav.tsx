import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from './Icon';
import styled from 'styled-components';
const NavWrapper = styled.div``;
const Nav = () => {
  return<div>
        <NavWrapper>
          <ul>
        <li>
         
              <NavLink to="/"> <Icon name="AccountBook-g"/>账本</NavLink>
            </li>
        <li>
          
              <NavLink to="/write"><Icon name="Write-g"/>记一笔</NavLink>
            </li>
            <li>
              <NavLink to="/tags"><Icon name="Tags-g"/>标签分类</NavLink>
            </li>
            <li>
              <NavLink to="/analysis"><Icon name="Analysis-g"/>统计分析</NavLink>
            </li>
            </ul>
        </NavWrapper>
        </div>
 }

    export default Nav