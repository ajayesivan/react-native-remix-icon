import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlowChart(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 21.5A3.5 3.5 0 119.355 17H15v-2h2V9.242L14.757 7H9V9H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15L21 15v6h-6v-2H9.355A3.502 3.502 0 016 21.5zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm13 .5h-2v2h2v-2zM18 4.586L16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z" />
    </Svg>
  );
}

export default SvgFlowChart;
