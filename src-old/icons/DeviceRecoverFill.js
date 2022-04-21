import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDeviceRecoverFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 2a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h14zm-7 5a5 5 0 10.955 9.909L12 15a3 3 0 010-6c1.598 0 3 1.34 3 3h-2.5l2.128 4.254A5 5 0 0012 7z" />
    </Svg>
  );
}

export default SvgDeviceRecoverFill;
