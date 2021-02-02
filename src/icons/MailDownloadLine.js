import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMailDownloadLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 7.238l-7.928 7.1L4 7.216V19h9v2H3a1 1 0 01-1-1V4a1 1 0 011-1h18a1 1 0 011 1v8h-2V7.238zM19.501 5H4.511l7.55 6.662L19.502 5zM20 18h3l-4 4-4-4h3v-4h2v4z" />
    </Svg>
  );
}

export default SvgMailDownloadLine;
