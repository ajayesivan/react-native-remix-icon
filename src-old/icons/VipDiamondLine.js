import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVipDiamondLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.873 3h14.254a1 1 0 01.809.412l3.823 5.256a.5.5 0 01-.037.633L12.367 21.602a.5.5 0 01-.706.028c-.007-.006-3.8-4.115-11.383-12.329a.5.5 0 01-.037-.633l3.823-5.256A1 1 0 014.873 3zm.51 2l-2.8 3.85L12 19.05l9.417-10.2-2.8-3.85H5.383z" />
    </Svg>
  );
}

export default SvgVipDiamondLine;
