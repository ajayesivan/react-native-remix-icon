import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChat1Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M10 3h4a8 8 0 110 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8z" />
    </Svg>
  );
}

export default SvgChat1Fill;
