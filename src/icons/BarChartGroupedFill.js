import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBarChartGroupedFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z" />
  </Svg>
);
export default SvgBarChartGroupedFill;
