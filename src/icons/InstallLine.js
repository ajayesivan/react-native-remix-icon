import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgInstallLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M9 2v2H5l-.001 10h14L19 4h-4V2h5a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm9.999 14h-14L5 20h14zM17 17v2h-2v-2zM13 2v5h3l-4 4-4-4h3V2z" />
  </Svg>
);
export default SvgInstallLine;
