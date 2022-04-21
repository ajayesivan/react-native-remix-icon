import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArtboardFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243-1.414-1.414L8.586 17zM5 3h14a1 1 0 011 1v10H4V4a1 1 0 011-1z" />
    </Svg>
  );
}

export default SvgArtboardFill;
