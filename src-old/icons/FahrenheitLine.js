import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFahrenheitLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 12h7v2h-7v7h-2V8a4 4 0 014-4h7v2h-7a2 2 0 00-2 2v4zm-7.5-2a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  );
}

export default SvgFahrenheitLine;
