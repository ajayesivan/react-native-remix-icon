import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVidicon2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 6V4H5V2h10v4h1a1 1 0 011 1v2.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1h11zm2 2H3v10h12V8zm2 4.359l4 2.8V8.84l-4 2.8v.718zM5 10h2v2H5v-2z" />
    </Svg>
  );
}

export default SvgVidicon2Line;
