import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUmbrellaLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 2.05c5.053.501 9 4.765 9 9.95v1h-9v6a2 2 0 104 0v-1h2v1a4 4 0 11-8 0v-6H2v-1c0-5.185 3.947-9.449 9-9.95V2a1 1 0 012 0v.05zM19.938 11a8.001 8.001 0 00-15.876 0h15.876z" />
    </Svg>
  );
}

export default SvgUmbrellaLine;
