import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCollageLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M20 3.107a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1zm-8.811 10.158L5 14.355v4.752h7.218zM19 5.107h-7.219l2.468 14H19zm-9.25 0H5v7.218l5.842-1.03z" />
  </Svg>
);
export default SvgCollageLine;
