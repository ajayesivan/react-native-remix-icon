import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailStarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 14.044A6 6 0 0013.689 21H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v10.044zm-9.94-2.361L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM19.5 21.75l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L19.5 15l1.323 2.68 2.957.43-2.14 2.085.505 2.946L19.5 21.75z" />
    </Svg>
  );
}

export default SvgMailStarFill;
