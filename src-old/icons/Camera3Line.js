import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCamera3Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 012 20V6zm2 1v12h16V7H4zm10 9a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zM4 2h6v2H4V2z" />
    </Svg>
  );
}

export default SvgCamera3Line;
