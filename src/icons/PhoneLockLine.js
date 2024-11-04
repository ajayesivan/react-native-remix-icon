import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPhoneLockLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 2a1 1 0 0 1 1 1v7h-2V4H7v16h5v2H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 10a3 3 0 0 1 3 3v1h1v5a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v2h4zm-2-4c-.508 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1" />
  </Svg>
);
export default SvgPhoneLockLine;
