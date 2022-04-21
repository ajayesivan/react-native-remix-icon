import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAB(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 01-4-4v-2h2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10h2zm-1 2.885L15.753 16h2.492L17 12.885zM3 3h6a3 3 0 012.235 5A3 3 0 019 13H3V3zm6 6H5v2h4a1 1 0 000-2zm8-6a4 4 0 014 4v2h-2V7a2 2 0 00-2-2h-3V3h3zM9 5H5v2h4a1 1 0 100-2z" />
    </Svg>
  );
}

export default SvgAB;
