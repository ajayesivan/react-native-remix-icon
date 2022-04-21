import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCelsiusFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.5 10a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM22 10h-2a4 4 0 10-8 0v5a4 4 0 108 0h2a6 6 0 11-12 0v-5a6 6 0 1112 0z" />
    </Svg>
  );
}

export default SvgCelsiusFill;
