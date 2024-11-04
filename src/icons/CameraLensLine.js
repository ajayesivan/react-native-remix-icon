import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCameraLensLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.858 19.71 12 16H5.07a8.02 8.02 0 0 0 4.788 3.71M4.252 14h4.284L5.07 7.999A7.96 7.96 0 0 0 4 12c0 .69.088 1.36.252 2m2.143-7.708L8.535 10 12 4a7.97 7.97 0 0 0-5.605 2.292m7.747-2.002L12 8h6.93a8.02 8.02 0 0 0-4.788-3.71M19.748 10h-4.284l3.465 6.001A7.96 7.96 0 0 0 20 12c0-.69-.087-1.36-.252-2m-2.143 7.708L15.465 14 12 20a7.97 7.97 0 0 0 5.605-2.292M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10m1.155-12h-2.31l-1.154 2 1.154 2h2.31l1.154-2z" />
  </Svg>
);
export default SvgCameraLensLine;
