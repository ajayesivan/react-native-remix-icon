import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSteamLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M17.001 4a5 5 0 1 1-.892 9.92l-2.651 1.989q.042.29.043.591a4 4 0 1 1-7.966-.524L1.709 14.43l.75-1.854 3.826 1.545a4 4 0 0 1 3.697-1.592l2.04-3.061A5 5 0 0 1 17.002 4m-7.5 10.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 0 1-.75 1.854L7.52 16.78A2 2 0 1 0 9.501 14.5m3.364-2.69-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5 5 0 0 1-1.135-1.191M17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4" />
  </Svg>
);
export default SvgSteamLine;
