import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInstallFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 2v5H8l4 4 4-4h-3V2h7a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h7zm8 14H5v4h14v-4zm-2 1v2h-2v-2h2z" />
    </Svg>
  );
}

export default SvgInstallFill;
