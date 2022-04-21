import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCakeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 7v4h7a1 1 0 011 1v8h2v2H1v-2h2v-8a1 1 0 011-1h7V7h2zm6 6H5v7h14v-7zM13.83.402A3 3 0 0112.732 4.5L11 5.5a3 3 0 011.098-4.098l1.732-1z" />
    </Svg>
  );
}

export default SvgCakeLine;
