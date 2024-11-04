import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlickrLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 17A5 5 0 106 7a5 5 0 000 10zm3-5a3 3 0 11-6 0 3 3 0 016 0zm9 5a5 5 0 100-10 5 5 0 000 10zm3-5a3 3 0 11-6 0 3 3 0 016 0z" />
    </Svg>
  );
}

export default SvgFlickrLine;
