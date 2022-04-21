import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHealthBookFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3a1 1 0 011-1h14zm-6 6h-2v3H9v2h2.999L12 16h2l-.001-3H17v-2h-3V8z" />
    </Svg>
  );
}

export default SvgHealthBookFill;
