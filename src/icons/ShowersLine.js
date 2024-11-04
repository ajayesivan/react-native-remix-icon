import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShowersLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 16.93a8 8 0 1 1 11.458-9.831A5.5 5.5 0 0 1 19 17.793v-2.13a3.5 3.5 0 1 0-4-5.612V10a6 6 0 1 0-10 4.472zM7 16h2v4H7zm8 0h2v4h-2zm-4 3h2v4h-2z" />
  </Svg>
);
export default SvgShowersLine;
