import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVidiconLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="m17 9.2 5.213-3.65a.5.5 0 0 1 .787.41v12.08a.5.5 0 0 1-.787.41L17 14.8V19a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4.2zm0 3.159 4 2.8V8.84l-4 2.8v.718zM3 6v12h12V6H3zm2 2h2v2H5V8z" />
  </Svg>
);

export default SvgVidiconLine;
