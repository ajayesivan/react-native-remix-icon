import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLockStarFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1a6 6 0 00-6 6v1H4a1 1 0 00-1 1v12a1 1 0 001 1h9.044A6 6 0 0121 14.044V9a1 1 0 00-1-1h-2V7a6 6 0 00-6-6zm4 7H8V7a4 4 0 118 0v1zm5.145 15.14l-.505-2.945 2.14-2.086-2.957-.43L18.5 15l-1.323 2.68-2.957.43 2.14 2.085-.505 2.946L18.5 21.75l2.645 1.39z" />
    </Svg>
  );
}

export default SvgLockStarFill;
