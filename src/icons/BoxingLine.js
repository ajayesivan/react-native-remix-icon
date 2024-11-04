import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBoxingLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16.5 2A5.5 5.5 0 0 1 22 7.5V10c0 .888-.386 1.686-1 2.235V17a3 3 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3 3 0 0 1 3 17V6a4 4 0 0 1 4-4zm-7 9H5v6a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17v-4h-6.036A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 1.493-1.355L11 12.5a1.5 1.5 0 0 0-1.356-1.493zm7-7H7a2 2 0 0 0-1.995 1.85L5 6v3h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 .993-.883L20 10V7.5a3.5 3.5 0 0 0-3.308-3.495z" />
  </Svg>
);
export default SvgBoxingLine;
