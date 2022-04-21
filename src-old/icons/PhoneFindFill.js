import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneFindFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2a1 1 0 011 1v8.529A6 6 0 009 16c0 3.238 2.76 6 6 6H6a1 1 0 01-1-1V3a1 1 0 011-1h12zm-3 10a4 4 0 013.446 6.032l2.21 2.21-1.413 1.415-2.211-2.21A4 4 0 1115 12zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgPhoneFindFill;
