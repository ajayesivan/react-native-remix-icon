import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgPhoneFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M21 16.42v3.536a1 1 0 0 1-.93.998Q19.415 21 19 21C10.163 21 3 13.837 3 5q0-.414.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45q.034.344.064.552A13.9 13.9 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.05 13.05 0 0 0 6.844 6.844l1.54-2.154a.46.46 0 0 1 .573-.149 13.9 13.9 0 0 0 4 1.205q.208.03.55.064a.5.5 0 0 1 .449.498" />
  </Svg>
);
export default SvgPhoneFill;
