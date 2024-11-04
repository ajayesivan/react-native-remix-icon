import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBusWifiLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 3v2H5v7h16v8h-1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1H3v-8H2V8h1V5a2 2 0 012-2h7zm7 11H5v4h14v-4zm-9 1v2H6v-2h4zm8 0v2h-4v-2h4zm.5-14a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a1.994 1.994 0 00-1.413-.585zm0-2.667a4.65 4.65 0 00-3.128 1.203l-.173.165.944.942a3.323 3.323 0 012.357-.977 3.32 3.32 0 012.201.83l.156.147.943-.943A4.652 4.652 0 0018.5 3.5z" />
    </Svg>
  );
}

export default SvgBusWifiLine;
