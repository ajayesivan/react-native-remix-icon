import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgVidicon2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 6V4H5V2h10v4h1a1 1 0 011 1v2.2l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41L17 14.8V19a1 1 0 01-1 1H2a1 1 0 01-1-1V7a1 1 0 011-1h11zm-8 4v2h2v-2H5z" />
    </Svg>
  );
}

export default SvgVidicon2Fill;
