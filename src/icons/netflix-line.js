import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNetflixLine = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M15.984 17.208 16 2h2v20a7.593 7.593 0 0 0-2.02-.5L8 6.302V21.5a7.335 7.335 0 0 0-2 .5V2h2l7.984 15.208z" />
  </Svg>
);

export default SvgNetflixLine;
