import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCodeView = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m16.95 8.464 1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95z" />
  </Svg>
);
export default SvgCodeView;
