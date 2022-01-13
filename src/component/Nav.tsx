import React from 'react';
import { Link } from 'react-router-dom';
const Nav = () => {
  return<div>
        <nav>
          <ul>
            <li>
              <Link to="/">账本</Link>
            </li>
            <li>
              <Link to="/write">记一笔</Link>
            </li>
            <li>
              <Link to="/tags">标签分类</Link>
            </li>
            <li>
              <Link to="/analysis">统计分析</Link>
            </li>
            </ul>
        </nav>
        </div>
 }

    export default Nav