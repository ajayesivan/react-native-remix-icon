import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailStarLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 13h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v9zM4.511 5l7.55 6.662L19.502 5H4.511zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946L19.5 21.75z" />
    </Svg>
  );
}

export default SvgMailStarLine;
