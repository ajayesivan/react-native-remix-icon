import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBilibiliLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 011.415 1.415L16.414 6H18.5A3.5 3.5 0 0122 9.5v8a3.5 3.5 0 01-3.5 3.5h-13A3.5 3.5 0 012 17.5v-8A3.5 3.5 0 015.5 6h2.085L5.757 4.171a1 1 0 011.415-1.415zM18.5 8h-13a1.5 1.5 0 00-1.493 1.356L4 9.5v8a1.5 1.5 0 001.356 1.493L5.5 19h13a1.5 1.5 0 001.493-1.356L20 17.5v-8A1.5 1.5 0 0018.5 8zM8 11a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm8 0a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgBilibiliLine;
