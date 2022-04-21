import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScalesLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 2v1h7v2h-7v14h4v2H7v-2h4V5H4V3h7V2h2zM5 6.343l2.828 2.829A3.999 3.999 0 015 16a3.999 3.999 0 01-2.828-6.828L5 6.343zm14 0l2.828 2.829A3.999 3.999 0 0119 16a3.999 3.999 0 01-2.828-6.828L19 6.343zM5 9.172l-1.414 1.414a2 2 0 102.828 0L5 9.172zm14 0l-1.414 1.414a2 2 0 102.828 0L19 9.172z" />
    </Svg>
  );
}

export default SvgScalesLine;
