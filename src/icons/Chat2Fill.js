import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChat2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14.45 19L12 22.5 9.55 19H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1h-6.55z" />
    </Svg>
  );
}

export default SvgChat2Fill;
