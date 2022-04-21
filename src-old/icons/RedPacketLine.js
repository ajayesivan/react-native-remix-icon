import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRedPacketLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.173 9.763A9.98 9.98 0 0019 7.141V4H5v3.141a9.98 9.98 0 004.827 2.622 2.5 2.5 0 014.346 0zm.208 2a2.501 2.501 0 01-4.762 0A11.94 11.94 0 015 9.749V20h14V9.748a11.94 11.94 0 01-4.619 2.016zM4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgRedPacketLine;
