import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVoiceprintLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M5 7h2v10H5zm-4 3h2v4H1zm8-8h2v18H9zm4 2h2v18h-2zm4 3h2v10h-2zm4 3h2v4h-2z" />
  </Svg>
);
export default SvgVoiceprintLine;
