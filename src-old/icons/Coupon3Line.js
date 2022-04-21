import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 4a1 1 0 011-1h18a1 1 0 011 1v5.5a2.5 2.5 0 100 5V20a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm6.085 15a1.5 1.5 0 012.83 0H20v-2.968a4.5 4.5 0 010-8.064V5h-9.085a1.5 1.5 0 01-2.83 0H4v14h4.085zM9.5 11a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgCoupon3Line;
