import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f6f6f6;
  .pad {
    margin-top: 10px;
    display: grid;
    grid-template:
      'a b c d'
      'e f g h'
      'i j k l'
      'm m n l' auto/ 23%;
    grid-column-gap: 2px;
    grid-row-gap: 2px;
    > button {
      background: #fff;
      border: none;
      text-align: center;
      border-radius: 8px;
      font-weight: 600;
      font-size: 18px;
      color: #333;
      padding: 18px 0;
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
