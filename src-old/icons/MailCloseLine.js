import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailCloseLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h11v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v10zM4.511 5l7.55 6.662L19.502 5H4.511zm16.903 14l2.122 2.121-1.415 1.415L20 20.414l-2.121 2.122-1.415-1.415L18.586 19l-2.122-2.121 1.415-1.415L20 17.586l2.121-2.122 1.415 1.415L21.414 19z" />
    </Svg>
  );
}

export default SvgMailCloseLine;
