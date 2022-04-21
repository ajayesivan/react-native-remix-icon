import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeSmileLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6 19h12V9.157l-6-5.454-6 5.454V19zm13 2H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L23 11h-3v9a1 1 0 01-1 1zM7.5 13h2a2.5 2.5 0 105 0h2a4.5 4.5 0 11-9 0z" />
    </Svg>
  );
}

export default SvgHomeSmileLine;
