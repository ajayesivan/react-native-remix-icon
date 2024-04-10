import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 4.529a5.998 5.998 0 018.242.228 6 6 0 01.236 8.236l-8.48 8.492-8.478-8.492a6 6 0 018.48-8.464z" />
    </Svg>
  );
}

export default SvgHeartFill;
