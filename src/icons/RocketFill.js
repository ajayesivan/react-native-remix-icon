import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRocketFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5.33 15.929a13 13 0 0 1-.33-2.93c0-5.087 2.903-9.435 7-11.181C16.099 3.564 19 7.912 19 13c0 1.01-.114 1.991-.33 2.929l2.02 1.795a.5.5 0 0 1 .097.631l-2.457 4.096a.5.5 0 0 1-.782.096l-2.255-2.254a1 1 0 0 0-.707-.293H9.415a1 1 0 0 0-.707.293l-2.255 2.254a.5.5 0 0 1-.782-.096l-2.457-4.096a.5.5 0 0 1 .096-.63zm6.67-2.93A2 2 0 1 0 12 9a2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgRocketFill;
