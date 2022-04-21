import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigationLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4.965 5.096l3.546 12.41 3.04-6.08 5.637-2.255L4.965 5.096zM2.899 2.3l18.806 6.268a.5.5 0 01.028.939L13 13l-4.425 8.85a.5.5 0 01-.928-.086L2.26 2.911A.5.5 0 012.9 2.3z" />
    </Svg>
  );
}

export default SvgNavigationLine;
