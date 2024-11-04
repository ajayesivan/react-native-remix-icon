import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGasStationLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657 1.414-1.414 4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2zm-9 0h7v-6H5zM5 5v6h7V5z" />
  </Svg>
);
export default SvgGasStationLine;
