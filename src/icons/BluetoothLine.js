import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBluetoothLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.312 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.414-1.415 5.778-5.778v-.97L5.22 5.737l1.414-1.415 4.364 4.364V2h2l5.657 5.657L14.312 12zm-1.314 1.515v5.657l2.828-2.829-2.828-2.828zm0-3.03l2.828-2.828-2.828-2.829v5.657z" />
    </Svg>
  );
}

export default SvgBluetoothLine;
