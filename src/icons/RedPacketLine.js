import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRedPacketLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.178 9.766a9.981 9.981 0 004.827-2.622V4.003h-14v3.141a9.98 9.98 0 004.827 2.622 2.5 2.5 0 014.346 0zm.208 2a2.501 2.501 0 01-4.762 0 11.941 11.941 0 01-4.62-2.015v10.252h14V9.75a11.942 11.942 0 01-4.618 2.016zM4.005 2.004h16a1 1 0 011 1v18a1 1 0 01-1 1h-16a1 1 0 01-1-1v-18a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgRedPacketLine;
