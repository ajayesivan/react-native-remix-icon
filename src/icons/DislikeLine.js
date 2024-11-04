import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDislikeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M2.808 1.393l18.384 18.385-1.414 1.414-3.746-3.747L12 21.485l-8.478-8.492a6 6 0 01.033-8.023L1.394 2.808l1.414-1.415zm2.172 10.23L12 18.654l2.618-2.623-9.646-9.645a4 4 0 00.008 5.237zm15.263-6.866a6 6 0 01.236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 00-5.683-5.606l-1.335 1.198-1.336-1.197a3.974 3.974 0 00-1.155-.723l-2.25-2.25A5.99 5.99 0 0112 4.53a5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgDislikeLine;
