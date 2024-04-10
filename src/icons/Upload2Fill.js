import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUpload2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7zM14 9v6h-4V9H5l7-7 7 7h-5z" />
    </Svg>
  );
}

export default SvgUpload2Fill;
