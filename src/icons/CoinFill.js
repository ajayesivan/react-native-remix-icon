import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgCoinFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M23.005 12.003v2c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823l-.005-.177v-2c0 3.313 4.925 6 11 6s11-2.687 11-6m-11-8c6.075 0 11 2.686 11 6s-4.925 6-11 6-11-2.687-11-6 4.925-6 11-6" />
  </Svg>
);
export default SvgCoinFill;
