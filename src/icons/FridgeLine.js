import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFridgeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.998 1a1 1 0 011 1v20a1 1 0 01-1 1h-14a1 1 0 01-1-1V2a1 1 0 011-1h14zm-1 11h-12v9h12v-9zm-8 2v4h-2v-4h2zm8-11h-12v7h12V3zm-8 2v3h-2V5h2z" />
    </Svg>
  );
}

export default SvgFridgeLine;
