import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'
import styled from 'styled-components'
const NavWrapper = styled.div`
  background: #fff;
  border-top: 1px solid #f6f6f6;
  > ul {
    display: flex;
    > li {
      text-align: center;
      width: 25%;
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #d8d8d8;
        padding: 4px 0;
        .icon {
          width: 22px;
          height: 22px;
          fill: #d8d8d8;
        }
        &.selected {
          color: #333;
          .icon {
            fill: #fe9c3c;
          }
        }
      }
    }
  }
`

const Nav = () => {
  return (
    <div>
      <NavWrapper>
        <ul>
          <li>
            <NavLink
              to="/AccountBook"
              activeClassName="selected"
              // isActive={handleActive}
            >
              <Icon name="AccountBook-g" />
              账本
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/write"
              activeClassName="selected"
              // isActive={handleActive}
            >
              <Icon name="Write-g" />
              记一笔
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tags"
              activeClassName="selected"
              //  isActive={handleActive}
            >
              <Icon name="Tags-g" />
              标签分类
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analysis"
              activeClassName="selected"
              //  isActive={handleActive}
            >
              <Icon name="Analysis-g" />
              统计分析
            </NavLink>
          </li>
        </ul>
      </NavWrapper>
    </div>
  )
}

export default Nav
