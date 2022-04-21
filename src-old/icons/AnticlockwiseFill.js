import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAnticlockwiseFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 10h3l-4 5-4-5h3V8a5 5 0 015-5h4v2H9a3 3 0 00-3 3v2zm5-1h10a1 1 0 011 1v10a1 1 0 01-1 1H11a1 1 0 01-1-1V10a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgAnticlockwiseFill;
