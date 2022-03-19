import styled from 'styled-components'
import px2vw from '../../../lib/px2vw'
const Wrapper = styled.div`
  background: #f6f6f6;
  .pad {
    display: grid;
    grid-template:
      'a b c d'
      'e f g h'
      'i j k l'
      'm m n l' auto/ 23%;
    grid-column-gap: ${px2vw(4)};
    grid-row-gap: ${px2vw(4)};
    > button {
      background: #fff;
      border: none;
      text-align: center;
      border-radius: ${px2vw(18)};
      font-weight: 600;
      font-size: ${px2vw(36)};
      color: #333;
      padding: ${px2vw(36)} 0;
    }
    .a {
      grid-area: a;
    }
    .b {
      grid-area: b;
    }
    .c {
      grid-area: c;
    }
    .d {
      grid-area: d;
    }
    .e {
      grid-area: e;
    }
    .f {
      grid-area: f;
    }
    .g {
      grid-area: g;
    }
    .h {
      grid-area: h;
    }
    .i {
      grid-area: i;
    }
    .j {
      grid-area: j;
    }
    .k {
      grid-area: k;
    }
    .l {
      grid-area: l;
      background: #ff9400;
      color: #fff;
    }
    .m {
      grid-area: m;
    }
    .n {
      grid-area: n;
    }
  }
`
export { Wrapper }
