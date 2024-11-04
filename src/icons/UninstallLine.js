import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgUninstallLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M8 2v2H5l-.001 10h14L19 4h-3V2h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm10.999 14h-14L5 20h14zM17 17v2h-2v-2zM12 2l4 4h-3v5h-2V6H8z" />
  </Svg>
);
export default SvgUninstallLine;
