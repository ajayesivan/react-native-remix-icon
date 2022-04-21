import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHotspotFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2v9h7v10a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h6zm2 5a2 2 0 012 2h-2V7zm0-3a5 5 0 015 5h-2a3 3 0 00-3-3V4zm0-3a8 8 0 018 8h-2a6 6 0 00-6-6V1z" />
    </Svg>
  );
}

export default SvgHotspotFill;
