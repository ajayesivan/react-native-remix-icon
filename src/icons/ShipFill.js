import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgShipFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M4 10.4V4a1 1 0 0 1 1-1h5V1h4v2h5a1 1 0 0 1 1 1v6.4l1.086.326a1 1 0 0 1 .683 1.2l-1.517 6.068A4.992 4.992 0 0 1 16 16 5 5 0 0 1 12 18a5 5 0 0 1-4-2 4.99 4.99 0 0 1-4.252 1.994l-1.516-6.068a1 1 0 0 1 .682-1.2zm2-.6L12 8l2.754.826 1.809.543L18 9.8V5H6zM4 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 12 20a5.98 5.98 0 0 0 4-1.528A5.98 5.98 0 0 0 20 20h2v2h-2a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 12 22a7.96 7.96 0 0 1-4-1.07A7.96 7.96 0 0 1 4 22H2v-2z" />
  </Svg>
);
export default SvgShipFill;
