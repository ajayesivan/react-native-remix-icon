import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEditBoxFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16.757 3l-7.466 7.466.008 4.247 4.238-.007L21 7.243V20a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1h12.757zm3.728-.9L21.9 3.516l-9.192 9.192-1.412.003-.002-1.417L20.485 2.1z" />
    </Svg>
  );
}

export default SvgEditBoxFill;
