import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchiveLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0122 4.003V10h-1v10.001a.996.996 0 01-.993.999H3.993A.996.996 0 013 20.001V10zm16 0H5v9h14v-9zM4 5v3h16V5H4zm5 7h6v2H9v-2z" />
    </Svg>
  );
}

export default SvgArchiveLine;
