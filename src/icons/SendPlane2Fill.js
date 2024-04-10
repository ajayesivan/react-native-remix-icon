import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSendPlane2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3 13h6v-2H3V1.846a.5.5 0 01.741-.439l18.462 10.155a.5.5 0 010 .876L3.741 22.592A.5.5 0 013 22.154V13z" />
    </Svg>
  );
}

export default SvgSendPlane2Fill;
