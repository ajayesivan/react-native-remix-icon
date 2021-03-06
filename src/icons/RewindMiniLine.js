import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRewindMiniLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M9 9.86L5.968 12 9 14.14V9.86zm1.908 7.463a.5.5 0 01-.696.12l-7.133-5.035a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.092.288zM18 14.14V9.86L14.968 12 18 14.14zm-5.921-1.732a.5.5 0 010-.816l7.133-5.036a.5.5 0 01.788.409v10.07a.5.5 0 01-.788.409l-7.133-5.036z" />
    </Svg>
  );
}

export default SvgRewindMiniLine;
