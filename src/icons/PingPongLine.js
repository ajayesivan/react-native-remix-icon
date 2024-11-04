import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPingPongLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11.5 2a9.5 9.5 0 0 1 9.5 9.5c0 1.53-.361 2.974-1.003 4.254l2.463 2.464a1 1 0 0 1 0 1.414l-2.828 2.828a1 1 0 0 1-1.415 0l-2.463-2.463A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19m5.303 13.388-1.414 1.414 3.536 3.535 1.414-1.414zm1.864-6.105-9.384 9.384c.7.216 1.445.333 2.217.333a7.5 7.5 0 0 0 2.74-.516l-.972-.974a1 1 0 0 1 0-1.414l2.828-2.828a1 1 0 0 1 1.414 0l.974.972A7.5 7.5 0 0 0 19 11.5c0-.772-.117-1.516-.333-2.217M11.5 4a7.5 7.5 0 0 0-4.136 13.757L17.757 7.364A7.5 7.5 0 0 0 11.5 4" />
  </Svg>
);
export default SvgPingPongLine;
