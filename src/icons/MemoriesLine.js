import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMemoriesLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M22 12c0-5.523-4.477-10-10-10a9.99 9.99 0 0 0-8 4V3.5H2v6h6v-2H5.385A8 8 0 1 1 4 12H2c0 5.523 4.477 10 10 10s10-4.477 10-10M10.777 8.518l4.599 3.066a.5.5 0 0 1 0 .832l-4.599 3.066a.5.5 0 0 1-.777-.416V8.934a.5.5 0 0 1 .777-.416" />
  </Svg>
);
export default SvgMemoriesLine;
