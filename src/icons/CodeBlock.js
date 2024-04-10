import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCodeBlock(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.414 6l2.293-2.293-1.414-1.414L.586 6l3.707 3.707 1.414-1.414L3.414 6zm6.172 0L7.293 3.707l1.414-1.414L12.414 6 8.707 9.707 7.293 8.293 9.586 6zM14 3h7a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7h16V5h-6V3z" />
    </Svg>
  );
}

export default SvgCodeBlock;
