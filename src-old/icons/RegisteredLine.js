import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRegisteredLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm.5 3a3.5 3.5 0 011.82 6.49L16.868 17h-2.472l-2.18-3H10v3H8V7h4.5zm0 2H10v3h2.5a1.5 1.5 0 001.493-1.356L14 10.5A1.5 1.5 0 0012.5 9z" />
    </Svg>
  );
}

export default SvgRegisteredLine;
