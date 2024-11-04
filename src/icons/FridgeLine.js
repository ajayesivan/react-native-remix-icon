import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFridgeLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M18.998 1a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm-1 11h-12v9h12zm-8 2v4h-2v-4zm8-11h-12v7h12zm-8 2v3h-2V5z" />
  </Svg>
);
export default SvgFridgeLine;
