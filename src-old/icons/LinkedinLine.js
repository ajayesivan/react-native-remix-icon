import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLinkedinLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 015.5 5.5V21h-2v-7.5a3.5 3.5 0 00-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1 2h2V21H4V8.5z" />
    </Svg>
  );
}

export default SvgLinkedinLine;
