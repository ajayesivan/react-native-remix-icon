import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTv2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 012 18V4zm2 1v12h16V5H4zm1 15h14v2H5v-2z" />
    </Svg>
  );
}

export default SvgTv2Line;
