import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgTaskFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M21 3v18.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H20a1 1 0 0 1 1 1m-9.707 10.121-2.475-2.475-1.414 1.415 3.889 3.889 5.657-5.657-1.414-1.414z" />
  </Svg>
);
export default SvgTaskFill;
