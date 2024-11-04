import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDnaFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18 1c0 .716-.064 1.38-.184 2H8.232c.639 2.552 2.562 4.229 5.35 6.428-.505.437-1.036.866-1.582 1.299C8.73 8.135 6 5.668 6 1H4c0 5.466 3.21 8.464 6.386 11C7.21 14.537 4 17.534 4 23h2c0-4.96 3.08-7.434 6.618-10.214l.092-.072C16.149 10.012 20 6.987 20 1h-2zm-.184 20H8.232c.659-2.634 2.687-4.335 5.622-6.64.443-.35.888-.697 1.327-1.051C17.766 15.599 20 18.44 20 23h-2c0-.715-.064-1.38-.184-2z" />
    </Svg>
  );
}

export default SvgDnaFill;
