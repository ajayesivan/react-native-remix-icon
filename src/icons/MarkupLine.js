import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgMarkupLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m10 10.497 1.039-3.635a1 1 0 0 1 1.922 0L14 10.497v1.5h.72a1 1 0 0 1 .97.757l1.361 5.447a8 8 0 1 0-10.102 0l1.362-5.447a1 1 0 0 1 .97-.757H10zm2 9.5q.362 0 .719-.032c.9-.08 1.757-.31 2.546-.663l-1.327-5.305h-3.876l-1.327 5.305a7.95 7.95 0 0 0 3.265.695m0 2c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10" />
  </Svg>
);
export default SvgMarkupLine;
