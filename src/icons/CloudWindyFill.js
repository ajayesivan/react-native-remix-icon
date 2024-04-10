import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudWindyFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14 19v-3.993H2.074a8 8 0 1114.383-6.908A5.5 5.5 0 1117.5 19h-3.499zm-8 2h10v2H6v-2zm-4-4h10v2H2v-2z" />
    </Svg>
  );
}

export default SvgCloudWindyFill;
