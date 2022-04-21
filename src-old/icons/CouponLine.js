import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCouponLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 9.5V4a1 1 0 011-1h18a1 1 0 011 1v5.5a2.5 2.5 0 100 5V20a1 1 0 01-1 1H3a1 1 0 01-1-1v-5.5a2.5 2.5 0 100-5zm2-1.532a4.5 4.5 0 010 8.064V19h16v-2.968a4.5 4.5 0 010-8.064V5H4v2.968zM9 9h6v2H9V9zm0 4h6v2H9v-2z" />
    </Svg>
  );
}

export default SvgCouponLine;
