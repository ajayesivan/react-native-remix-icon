import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlickrFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 12a5 5 0 11-10 0 5 5 0 0110 0zm12 0a5 5 0 11-10 0 5 5 0 0110 0z" />
    </Svg>
  );
}

export default SvgFlickrFill;
