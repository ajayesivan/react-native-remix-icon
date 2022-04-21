import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkipBackMiniLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7 6a1 1 0 011 1v10a1 1 0 01-2 0V7a1 1 0 011-1zm8 8.14V9.86L11.968 12 15 14.14zm-5.921-1.732a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.036z" />
    </Svg>
  );
}

export default SvgSkipBackMiniLine;
