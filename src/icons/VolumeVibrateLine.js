import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgVolumeVibrateLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="m19.39 3.161 1.413 1.414-2.475 2.475 2.475 2.475L18.328 12l2.475 2.476-2.475 2.475 2.475 2.475-1.414 1.414-3.889-3.89 2.475-2.474L15.5 12l2.475-2.475L15.5 7.05zm-6.503.577a.5.5 0 0 1 .113.317v15.89a.5.5 0 0 1-.817.387L6.89 15.999 3 16a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h3.889l5.294-4.332a.5.5 0 0 1 .704.07M11 7.22 7.603 9.999H4V14l3.603-.001L11 16.779z" />
  </Svg>
);
export default SvgVolumeVibrateLine;
