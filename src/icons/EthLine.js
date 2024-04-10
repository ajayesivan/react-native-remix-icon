import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEthLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.149 15.304L12 20.6l3.851-5.296L12 17.674l-3.851-2.37zm8.988-3.14L12 3.816l-5.137 8.348L12 15.326l5.137-3.162zM4 13l8-13 8 13-8 11-8-11z" />
    </Svg>
  );
}

export default SvgEthLine;
