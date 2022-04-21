import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUninstallFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm-1 14H5v4h14v-4zm-2 1v2h-2v-2h2zM12 2L8 6h3v5h2V6h3l-4-4z" />
    </Svg>
  );
}

export default SvgUninstallFill;
