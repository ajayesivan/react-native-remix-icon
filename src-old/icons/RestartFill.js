import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRestartFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.82-4.924a7 7 0 10-1.852 1.266l-.975-1.755A5 5 0 1117 12h-3l2.82 5.076z" />
    </Svg>
  );
}

export default SvgRestartFill;
