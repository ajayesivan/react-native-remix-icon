import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSkipDownFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 17H6v-2h12zm-6-4 6-6H6z" />
  </Svg>
);
export default SvgSkipDownFill;
