import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPlayLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M16.394 12 10 7.737v8.526zm2.982.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832" />
  </Svg>
);
export default SvgPlayLine;
