import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTruckFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17 8h3l3 4.056V18h-2.035a3.5 3.5 0 01-6.93 0h-5.07a3.5 3.5 0 01-6.93 0H1V6a1 1 0 011-1h14a1 1 0 011 1v2zm0 2v3h4v-.285L18.992 10H17z" />
    </Svg>
  );
}

export default SvgTruckFill;
