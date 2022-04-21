import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlowChart(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 21.5A3.5 3.5 0 119.355 17H15v-2h2V9.242L14.757 7H9v2H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15h2v6h-6v-2H9.355A3.501 3.501 0 016 21.5zm0-5a1.5 1.5 0 10.001 3.001A1.5 1.5 0 006 16.5zm13 .5h-2v2h2v-2zM18 4.586L16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z" />
    </Svg>
  );
}

export default SvgFlowChart;
