import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSoundModuleLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 18v3h-2v-3h-2v-2h6v2zM5 18v3H3v-3H1v-2h6v2zm6-12V3h2v3h2v2H9V6zm0 4h2v11h-2zm-8 4V3h2v11zm16 0V3h2v11z" />
  </Svg>
);
export default SvgSoundModuleLine;
