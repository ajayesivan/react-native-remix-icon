import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhoneFindLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M18 2a1 1 0 011 1v8h-2V4H7v16h4v2H6a1 1 0 01-1-1V3a1 1 0 011-1h12zm-3 10a4 4 0 013.446 6.032l2.21 2.21-1.413 1.415-2.212-2.21A4 4 0 1115 12zm0 2a2 2 0 100 4 2 2 0 000-4z" />
    </Svg>
  );
}

export default SvgPhoneFindLine;
