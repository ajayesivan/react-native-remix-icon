import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgLink = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M18.364 15.536 16.95 14.12l1.414-1.414a5 5 0 0 0-7.071-7.071L9.878 7.05 8.464 5.636l1.414-1.414a7 7 0 0 1 9.9 9.9zm-2.829 2.828-1.414 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 0 0 7.07 7.071l1.415-1.414zm-.707-10.607 1.415 1.415-7.072 7.07-1.414-1.414z" />
  </Svg>
);
export default SvgLink;
