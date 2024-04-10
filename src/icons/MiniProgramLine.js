import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMiniProgramLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-6a3.5 3.5 0 11-4.977-3.174 1 1 0 11.845 1.813A1.5 1.5 0 1011 14v-4a3.5 3.5 0 114.977 3.174 1 1 0 01-.845-1.813A1.5 1.5 0 1013.001 10v4z" />
    </Svg>
  );
}

export default SvgMiniProgramLine;
