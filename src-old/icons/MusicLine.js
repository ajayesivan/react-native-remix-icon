import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMusicLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 13.535V3h8v2h-6v12a4 4 0 11-2-3.465zM10 19a2 2 0 100-4 2 2 0 000 4z" />
    </Svg>
  );
}

export default SvgMusicLine;
