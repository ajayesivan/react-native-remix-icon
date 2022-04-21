import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTruckLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.965 18a3.5 3.5 0 01-6.93 0H1V6a1 1 0 011-1h14a1 1 0 011 1v2h3l3 4.056V18h-2.035a3.5 3.5 0 01-6.93 0h-5.07zM15 7H3v8.05a3.5 3.5 0 015.663.95h5.674c.168-.353.393-.674.663-.95V7zm2 6h4v-.285L18.992 10H17v3zm.5 6a1.5 1.5 0 100-3.001 1.5 1.5 0 000 3.001zM7 17.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
    </Svg>
  );
}

export default SvgTruckLine;
