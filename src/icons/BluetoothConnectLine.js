import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBluetoothConnectLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.311 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.415-1.415 5.779-5.778v-.97L5.219 5.737l1.415-1.415 4.364 4.364V2h2l5.656 5.657L14.311 12zm-1.313 1.515v5.657l2.828-2.829-2.828-2.828zm0-3.03l2.828-2.828-2.828-2.829v5.657zM19.5 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-13 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </Svg>
  );
}

export default SvgBluetoothConnectLine;
