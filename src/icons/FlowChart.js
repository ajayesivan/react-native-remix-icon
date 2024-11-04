import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlowChart = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M6 21.5A3.5 3.5 0 1 1 9.355 17H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355A3.5 3.5 0 0 1 6 21.5m0-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m13 .5h-2v2h2zM18 4.586 16.586 6 18 7.414 19.414 6zM7 5H5v2h2z" />
  </Svg>
);
export default SvgFlowChart;
