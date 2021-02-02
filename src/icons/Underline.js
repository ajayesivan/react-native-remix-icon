import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnderline(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 3v9a4 4 0 108 0V3h2v9a6 6 0 11-12 0V3h2zM4 20h16v2H4v-2z" />
    </Svg>
  );
}

export default SvgUnderline;
