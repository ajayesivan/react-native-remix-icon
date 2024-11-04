import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChromeFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M9.827 21.763C5.35 20.771 2 16.777 2 12c0-1.822.487-3.53 1.339-5.002l4.283 7.419a5 5 0 0 0 4.976 2.548zM12 22l4.287-7.425A5 5 0 0 0 17 12a4.98 4.98 0 0 0-1-3h5.542c.298.947.458 1.955.458 3 0 5.523-4.477 10-10 10m2.572-8.455a3 3 0 0 1-5.17-.045l-.029-.05a3 3 0 1 1 5.225.05zm-9.94-8.306A9.97 9.97 0 0 1 12 2a10 10 0 0 1 8.662 5H12a5 5 0 0 0-4.599 3.034z" />
  </Svg>
);
export default SvgChromeFill;
