import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgGradienterFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10M8.126 11H4.062a8 8 0 0 0 0 2h4.064a4 4 0 0 1 0-2m7.748 0a4 4 0 0 1 0 2h4.064a8 8 0 0 0 0-2zM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
  </Svg>
);
export default SvgGradienterFill;
