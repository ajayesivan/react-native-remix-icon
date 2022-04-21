import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmpathizeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18.364 10.98a4 4 0 010 5.656l-5.657 5.657a1 1 0 01-1.414 0l-5.657-5.657a4 4 0 015.657-5.657l.706.707.708-.707a4 4 0 015.657 0zM12 1c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z" />
    </Svg>
  );
}

export default SvgEmpathizeFill;
