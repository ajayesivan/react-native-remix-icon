import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrelloFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.25 3h13.5A2.25 2.25 0 0121 5.25v13.5A2.25 2.25 0 0118.75 21H5.25A2.25 2.25 0 013 18.75V5.25A2.25 2.25 0 015.25 3zm7.92 3.42v5.76c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 001.08-1.08V6.42a1.08 1.08 0 00-1.08-1.08h-3.33a1.08 1.08 0 00-1.08 1.08zm-7.83 0v10.26c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 001.08-1.08V6.42a1.08 1.08 0 00-1.08-1.08H6.42a1.08 1.08 0 00-1.08 1.08z" />
    </Svg>
  );
}

export default SvgTrelloFill;
