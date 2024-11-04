import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgSquareRoot = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M15.382 4H22v2h-5.382L9 21.236 5.382 14H2v-2h4.618L9 16.764z" />
  </Svg>
);
export default SvgSquareRoot;
