import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLayout3Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8 10v11H4a1 1 0 01-1-1V10h5zm13 0v10a1 1 0 01-1 1H10V10h11zm-1-7a1 1 0 011 1v4H3V4a1 1 0 011-1h16z" />
    </Svg>
  );
}

export default SvgLayout3Fill;
