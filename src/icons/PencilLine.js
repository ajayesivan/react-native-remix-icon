import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPencilLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m15.728 9.576-1.414-1.414L5 17.476v1.414h1.414zm1.414-1.414 1.414-1.414-1.414-1.414-1.414 1.414zm-9.9 12.728H3v-4.243L16.435 3.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414z" />
  </Svg>
);
export default SvgPencilLine;
