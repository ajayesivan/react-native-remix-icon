import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendPlane2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.5 1.346a.5.5 0 01.241.061l18.462 10.155a.5.5 0 010 .876L3.741 22.592A.5.5 0 013 22.154V1.846a.5.5 0 01.5-.5zM5 4.382V11h5v2H5v6.617L18.85 12 5 4.382z" />
    </Svg>
  );
}

export default SvgSendPlane2Line;
