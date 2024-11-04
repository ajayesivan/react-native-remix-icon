import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEmphasisCn(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 19a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM13 2v2h6v2h-1.968a18.222 18.222 0 01-3.621 6.302 14.683 14.683 0 005.327 3.042l-.536 1.93A16.686 16.686 0 0112 13.726 16.697 16.697 0 015.8 17.273l-.536-1.929a14.7 14.7 0 005.327-3.042 18.077 18.077 0 01-2.822-4.3h2.24A16.03 16.03 0 0012 10.876a16.17 16.17 0 002.91-4.876L5 6V4h6V2h2z" />
    </Svg>
  );
}

export default SvgEmphasisCn;
