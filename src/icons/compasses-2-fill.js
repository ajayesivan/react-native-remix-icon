import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCompasses2Fill = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path d="M16.33 13.5A6.988 6.988 0 0 0 19 8h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108A8.97 8.97 0 0 1 12 17a8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.063-8.77A4.002 4.002 0 0 1 11 4.126V2h2v2.126a4.002 4.002 0 0 1 1.803 6.728L16.33 13.5zm-1.73 1.002-1.528-2.647a4.004 4.004 0 0 1-2.142 0l-1.528 2.647a6.99 6.99 0 0 0 2.599.498c.918 0 1.795-.177 2.599-.498zM12 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </Svg>
);

export default SvgCompasses2Fill;
