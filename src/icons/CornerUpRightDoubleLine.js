import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpRightDoubleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 10v9h2v-7h6.172l-3.95 3.95 1.414 1.414L16 11 9.636 4.636 8.222 6.05l3.95 3.95H4zm11.25-5.364L13.836 6.05l4.95 4.95-4.95 4.95 1.414 1.414L21.614 11 15.25 4.636z" />
    </Svg>
  );
}

export default SvgCornerUpRightDoubleLine;
