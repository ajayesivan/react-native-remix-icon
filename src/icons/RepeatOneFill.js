import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgRepeatOneFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8 20v1.933a.5.5 0 0 1-.82.384l-4.12-3.433A.5.5 0 0 1 3.382 18H18a2 2 0 0 0 2-2V8h2v8a4 4 0 0 1-4 4zm8-16V2.068a.5.5 0 0 1 .82-.385l4.12 3.433a.5.5 0 0 1-.321.884H6a2 2 0 0 0-2 2v8H2V8a4 4 0 0 1 4-4zm-5 4h2v8h-2v-6H9V9z" />
  </Svg>
);
export default SvgRepeatOneFill;
