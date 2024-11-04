import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPlayReverseMiniLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15 8.482v7.036L8.97 12 15 8.482zm1.248-3.043L5.74 11.569a.5.5 0 000 .863l10.508 6.13A.5.5 0 0017 18.13V5.87a.5.5 0 00-.752-.431z" />
    </Svg>
  );
}

export default SvgPlayReverseMiniLine;
