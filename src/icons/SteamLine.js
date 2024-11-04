import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSteamLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.001 4a5 5 0 11-.892 9.92l-2.651 1.989a4 4 0 11-7.923.068L1.709 14.43l.75-1.854 3.826 1.545a3.994 3.994 0 013.697-1.592l2.04-3.061A5 5 0 0117.002 4zm-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 01-.75 1.854L7.52 16.78A2 2 0 109.501 14.5zm3.364-2.69l-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.027 5.027 0 01-1.135-1.191zM17 6a3 3 0 100 6 3 3 0 000-6zm0 1a2 2 0 110 4 2 2 0 010-4z" />
    </Svg>
  );
}

export default SvgSteamLine;
