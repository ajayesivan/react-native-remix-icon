import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCompass2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.625 3.133l-1.5 1.5A7.98 7.98 0 0012 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8a7.979 7.979 0 00-.633-3.125l1.5-1.5A9.951 9.951 0 0122 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2c1.668 0 3.242.41 4.625 1.133zm1.739 1.089l1.414 1.414L12 13.414 10.586 12l7.778-7.778z" />
    </Svg>
  );
}

export default SvgCompass2Line;
