import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDice6Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm4 6.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1.5 2.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0 4a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </Svg>
  );
}

export default SvgDice6Fill;
