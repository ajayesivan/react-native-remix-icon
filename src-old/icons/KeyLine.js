import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKeyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.917 13A6.002 6.002 0 011 12a6 6 0 0111.917-1H23v2h-2v4h-2v-4h-2v4h-2v-4h-2.083zM7 16a4 4 0 100-8 4 4 0 000 8z" />
    </Svg>
  );
}

export default SvgKeyLine;
