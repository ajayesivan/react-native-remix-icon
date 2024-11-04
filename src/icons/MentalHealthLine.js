import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMentalHealthLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M11 2a8 8 0 0 1 7.934 6.965l2.25 3.539c.148.233.118.58-.225.728L19 14.07V17a2 2 0 0 1-2 2h-1.999L15 22H6v-3.694c0-1.18-.436-2.297-1.245-3.305A8 8 0 0 1 11 2m0 2a6 6 0 0 0-4.684 9.75C7.41 15.114 8 16.667 8 18.306V20h5l.002-3H17v-4.248l1.55-.664-1.543-2.425-.057-.442A6 6 0 0 0 11 4m-.53 3.763.53.53.53-.53a1.75 1.75 0 0 1 2.475 2.474L11 13.243l-3.005-3.006a1.75 1.75 0 1 1 2.475-2.474" />
  </Svg>
);
export default SvgMentalHealthLine;
