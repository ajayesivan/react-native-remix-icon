import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFigmaLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 2.646 7A4 4 0 0 1 13 15.465V18a4 4 0 1 1-6.646-3A4 4 0 0 1 5 12a4 4 0 0 1 1.354-3A4 4 0 0 1 5 6m6 4H9a2 2 0 1 0 0 4h2zm2 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2-4a2 2 0 1 0 0-4h-2v4zM9 4a2 2 0 1 0 0 4h2V4zm2 12H9a2 2 0 1 0 2 2z" />
  </Svg>
);
export default SvgFigmaLine;
