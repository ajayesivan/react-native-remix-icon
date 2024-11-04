import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCouponLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.005 9.5V4a1 1 0 011-1h18a1 1 0 011 1v5.5a2.5 2.5 0 000 5V20a1 1 0 01-1 1h-18a1 1 0 01-1-1v-5.5a2.5 2.5 0 000-5zm2-1.532a4.5 4.5 0 010 8.064V19h16v-2.968a4.5 4.5 0 010-8.064V5h-16v2.968zm5 1.032h6v2h-6V9zm0 4h6v2h-6v-2z" />
    </Svg>
  );
}

export default SvgCouponLine;
