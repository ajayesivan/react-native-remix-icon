import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgListCheck3(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8 6v3H5V6h3zM3 4v7h7V4H3zm10 0h8v2h-8V4zm0 7h8v2h-8v-2zm0 7h8v2h-8v-2zm-2.293-1.793l-1.414-1.414L6 18.086l-1.793-1.793-1.414 1.414L6 20.914l4.707-4.707z" />
    </Svg>
  );
}

export default SvgListCheck3;
