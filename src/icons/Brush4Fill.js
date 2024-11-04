import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBrush4Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20 15.997H4v2h16v-2zm-17-2v-10a1 1 0 011-1h3v8.272h2V2.997h11a1 1 0 011 1v10h1v5a1 1 0 01-1 1h-8v3h-2v-3H3a1 1 0 01-1-1v-5h1z" />
    </Svg>
  );
}

export default SvgBrush4Fill;
