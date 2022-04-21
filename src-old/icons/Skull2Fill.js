import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSkull2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c5.523 0 10 4.477 10 10v3.764a2 2 0 01-1.106 1.789L18 19v1a3 3 0 01-2.824 2.995L14.95 23a2.5 2.5 0 00.044-.33L15 22.5V22a2 2 0 00-1.85-1.995L13 20h-2a2 2 0 00-1.995 1.85L9 22v.5c0 .171.017.339.05.5H9a3 3 0 01-3-3v-1l-2.894-1.447A2 2 0 012 15.763V12C2 6.477 6.477 2 12 2zm-4 9a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgSkull2Fill;
