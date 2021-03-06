import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContrastDropLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 3.1L7.05 8.05a7 7 0 109.9 0L12 3.1zm0-2.828l6.364 6.364a9 9 0 11-12.728 0L12 .272zM12 18V8a5 5 0 010 10z" />
    </Svg>
  );
}

export default SvgContrastDropLine;
