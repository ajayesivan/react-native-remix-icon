import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeSmileFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 20a1 1 0 01-1 1H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9zM7.5 13a4.5 4.5 0 109 0h-2a2.5 2.5 0 11-5 0h-2z" />
    </Svg>
  );
}

export default SvgHomeSmileFill;
