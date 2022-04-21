import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSignalTowerFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.116 20.087A9.986 9.986 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.986 9.986 0 01-4.116 8.087l-1.015-1.739a8 8 0 10-9.738 0l-1.015 1.739zm2.034-3.485a6 6 0 117.7 0l-1.03-1.766a4 4 0 10-5.64 0l-1.03 1.766zM11 13h2l1 9h-4l1-9z" />
    </Svg>
  );
}

export default SvgSignalTowerFill;
