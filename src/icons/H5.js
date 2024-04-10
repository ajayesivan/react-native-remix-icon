import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgH5(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 8v2h-4.323l-.464 2.636A4.006 4.006 0 0122.25 16.5a4 4 0 01-7.846 1.103l1.923-.551a2 2 0 10.363-1.804l-1.81-.904L16 8h6zM4 4v7h7V4h2v16h-2v-7H4v7H2V4h2z" />
    </Svg>
  );
}

export default SvgH5;
