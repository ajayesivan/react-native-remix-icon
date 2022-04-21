import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHealthBookLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 2a1 1 0 011 1v18a1 1 0 01-1 1H6a1 1 0 01-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3a1 1 0 011-1h14zm-1 2H7v16h12V4zm-5 4v3h3v2h-3.001L14 16h-2l-.001-3H9v-2h3V8h2z" />
    </Svg>
  );
}

export default SvgHealthBookLine;
