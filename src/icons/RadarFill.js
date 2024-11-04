import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRadarFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m14.369 4.398-3.485 6.035 1.732 1 3.485-6.035c4.169 2.772 6.305 7.08 4.56 10.102-1.86 3.222-7.19 3.355-11.91.63C4.028 13.402 1.48 8.721 3.34 5.5c1.745-3.023 6.543-3.327 11.028-1.102m1.515-2.625 1.732 1-1.5 2.598-1.732-1zM6.732 20H17v2H5.018a1 1 0 0 1-1.015-.922 1 1 0 0 1 .131-.578l2.25-3.897 1.732 1z" />
  </Svg>
);
export default SvgRadarFill;
