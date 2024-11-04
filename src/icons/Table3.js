import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTable3(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 3a1 1 0 00-1 1v16a1 1 0 001 1h18a1 1 0 001-1V4a1 1 0 00-1-1H3zm8 2v3H4V5h7zm-7 9v-4h7v4H4zm0 2h7v3H4v-3zm9 0h7v3h-7v-3zm7-2h-7v-4h7v4zm0-9v3h-7V5h7z" />
    </Svg>
  );
}

export default SvgTable3;
