import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.001 4.529a5.998 5.998 0 018.242.228 6 6 0 01.236 8.236l-8.48 8.492-8.478-8.492a6 6 0 018.48-8.464zm6.826 1.641a3.998 3.998 0 00-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 00-5.494.154 4 4 0 00-.192 5.451L12 18.654l7.02-7.03a4 4 0 00-.193-5.454z" />
    </Svg>
  );
}

export default SvgHeartLine;
