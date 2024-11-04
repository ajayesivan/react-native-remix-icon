import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRhythmLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M2 9h2v12H2zm6-6h2v18H8zm6 9h2v9h-2zm6-6h2v15h-2z" />
  </Svg>
);
export default SvgRhythmLine;
