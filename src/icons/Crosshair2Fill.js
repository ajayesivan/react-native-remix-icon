import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCrosshair2Fill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 5.07A7.005 7.005 0 0 0 5.07 11H7v2H5.07A7 7 0 0 0 11 18.93V17h2v1.93A7 7 0 0 0 18.93 13H17v-2h1.93A7 7 0 0 0 13 5.07V7h-2zM3.055 11A9.004 9.004 0 0 1 11 3.055V1h2v2.055A9.004 9.004 0 0 1 20.945 11H23v2h-2.055A9.004 9.004 0 0 1 13 20.945V23h-2v-2.055A9.004 9.004 0 0 1 3.055 13H1v-2zM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
  </Svg>
);
export default SvgCrosshair2Fill;
