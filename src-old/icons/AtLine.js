import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAtLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 12a8 8 0 10-3.562 6.657l1.11 1.664A9.953 9.953 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 01-6.396 1.966A5 5 0 1115 8h2v5.5a1.5 1.5 0 003 0V12zm-8-3a3 3 0 100 6 3 3 0 000-6z" />
    </Svg>
  );
}

export default SvgAtLine;
