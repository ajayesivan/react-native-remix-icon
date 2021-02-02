import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScan2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.257 5.671l2.137 2.137a7 7 0 101.414-1.414L5.67 4.257A9.959 9.959 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329zm3.571 3.572L12 13.414 13.414 12 9.243 7.828a5 5 0 11-1.414 1.414z" />
    </Svg>
  );
}

export default SvgScan2Fill;
