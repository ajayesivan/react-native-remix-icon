import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnsplashFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.501 11v5h7v-5h5.5v10h-18V11h5.5zm7-8v5h-7V3h7z" />
    </Svg>
  );
}

export default SvgUnsplashFill;
