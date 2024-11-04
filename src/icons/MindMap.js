import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMindMap = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M18 3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-1.1 0-2 .9-2 2v.171a3.001 3.001 0 0 1 0 5.658V15c0 1.1.9 2 2 2h1.17A3 3 0 0 1 15 15h3a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.829-2H11c-2.21 0-4-1.79-4-4H5a3 3 0 1 1 0-6h2a4 4 0 0 1 4-4h1.17A3 3 0 0 1 15 3zm0 14h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2M8 11H5a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m10-6h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2" />
  </Svg>
);
export default SvgMindMap;
