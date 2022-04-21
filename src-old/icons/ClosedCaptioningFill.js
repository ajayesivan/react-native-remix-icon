import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgClosedCaptioningFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM9 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c1.1 0 2.1-.45 2.828-1.172l-1.414-1.414a2 2 0 11.001-2.827l1.414-1.414A3.985 3.985 0 009 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.828 2.828l-1.414-1.414a2 2 0 11.001-2.827l1.414-1.414A3.985 3.985 0 0016 8z" />
    </Svg>
  );
}

export default SvgClosedCaptioningFill;
