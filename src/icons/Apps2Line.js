import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgApps2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7 11.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm10-10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0 10a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm10-10a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    </Svg>
  );
}

export default SvgApps2Line;
