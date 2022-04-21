import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRadio2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3H6zM4 5v14h16V5H4zm5 10a3 3 0 110-6 3 3 0 010 6zm5-6h4v2h-4V9zm0 4h4v2h-4v-2z" />
    </Svg>
  );
}

export default SvgRadio2Line;
