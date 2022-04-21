import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUDiskLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 12H5v8h14v-8zM5 10V2h14v8h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1zm2 0h10V4H7v6zm2-4h2v2H9V6zm4 0h2v2h-2V6z" />
    </Svg>
  );
}

export default SvgUDiskLine;
