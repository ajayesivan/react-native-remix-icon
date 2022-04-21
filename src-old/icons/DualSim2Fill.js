import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDualSim2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M15 2l4.707 4.707a1 1 0 01.293.707V21a1 1 0 01-1 1H5a1 1 0 01-1-1V3a1 1 0 011-1h10zm-3 5.5a3 3 0 00-2.995 2.824L9 10.5h2a1 1 0 111.751.66l-.082.083L9 14.547V16h6v-2h-2.405l1.412-1.27-.006-.01.008.008A3 3 0 0012 7.5z" />
    </Svg>
  );
}

export default SvgDualSim2Fill;
