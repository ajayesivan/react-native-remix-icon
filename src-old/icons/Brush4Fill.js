import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush4Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 16H4v2h16v-2zM3 14V4a1 1 0 011-1h3v8.273h2V3h11a1 1 0 011 1v10h1v5a1 1 0 01-1 1h-8v3h-2v-3H3a1 1 0 01-1-1v-5h1z" />
    </Svg>
  );
}

export default SvgBrush4Fill;
