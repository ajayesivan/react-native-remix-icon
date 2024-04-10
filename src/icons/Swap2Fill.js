import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSwap2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.207 2.293l-1.414 1.414L18.086 6H13v2h5.086l-2.293 2.293 1.414 1.414L21.914 7l-4.707-4.707zM7 11.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5.914 18l2.293 2.293-1.414 1.414L2.086 17l4.707-4.707 1.414 1.414L5.914 16H11v2H5.914zM14 13a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1h-6z" />
    </Svg>
  );
}

export default SvgSwap2Fill;
