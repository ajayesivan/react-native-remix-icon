import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUninstallLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h4zm10.999 14h-14L5 20h14l-.001-4zM17 17v2h-2v-2h2zM12 2l4 4h-3v5h-2V6H8l4-4z" />
    </Svg>
  );
}

export default SvgUninstallLine;
