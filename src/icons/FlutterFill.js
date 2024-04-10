import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlutterFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.504 2.001l-10 10 3.083 3.083 13.08-13.083h-6.163zm-.005 9.198l-5.376 5.42L13.496 22h6.188l-5.387-5.4 5.389-5.4h-6.188z" />
    </Svg>
  );
}

export default SvgFlutterFill;
