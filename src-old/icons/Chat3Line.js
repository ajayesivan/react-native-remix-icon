import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChat3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 01-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0012 20a8 8 0 10-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z" />
    </Svg>
  );
}

export default SvgChat3Line;
