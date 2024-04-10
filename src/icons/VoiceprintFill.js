import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVoiceprintFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 7h2v10H5V7zm-4 3h2v4H1v-4zm8-8h2v18H9V2zm4 2h2v18h-2V4zm4 3h2v10h-2V7zm4 3h2v4h-2v-4z" />
    </Svg>
  );
}

export default SvgVoiceprintFill;
