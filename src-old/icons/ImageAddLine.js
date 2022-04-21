import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgImageAddLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3h2zm.008-12c.548 0 .992.445.992.993V13h-2V5H4v13.999L14 9l3 3v2.829l-3-3L6.827 19H14v2H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h18.016zM8 7a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgImageAddLine;
