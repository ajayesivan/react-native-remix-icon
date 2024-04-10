import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 9.5V4a1 1 0 011-1h18a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-18a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5zm12-4.5h-10v2.968a4.5 4.5 0 010 8.064V19h10V5zm2 0v14h4v-2.968a4.5 4.5 0 010-8.064V5h-4z" />
    </Svg>
  );
}

export default SvgCoupon2Line;
