import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClockwise2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 4V1l5 4-5 4V6H8a3 3 0 00-3 3v4H3V9a5 5 0 015-5h2zm-1 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1H10a1 1 0 01-1-1V11z" />
    </Svg>
  );
}

export default SvgClockwise2Fill;
