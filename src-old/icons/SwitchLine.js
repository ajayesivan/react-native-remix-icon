import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwitchLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3v18H7.6A4.6 4.6 0 013 16.4V7.6A4.6 4.6 0 017.6 3H12zm-2 2H7.6A2.6 2.6 0 005 7.6v8.8A2.6 2.6 0 007.6 19H10V5zm-2.5 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 3h2.4A4.6 4.6 0 0121 7.6v8.8a4.6 4.6 0 01-4.6 4.6H14V3zm3 11.7a1.8 1.8 0 100-3.6 1.8 1.8 0 000 3.6z" />
    </Svg>
  );
}

export default SvgSwitchLine;
