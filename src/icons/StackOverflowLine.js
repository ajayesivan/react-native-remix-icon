import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackOverflowLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.001 20.003V15h2v7.003h-16V15h2v5.003h12zM7.501 18v-2h9v2h-9zm.077-4.38l.347-1.97 8.864 1.563-.348 1.97-8.863-1.563zm1.634-5.504l1-1.732 7.794 4.5-1 1.732-7.794-4.5zm3.417-4.613l1.532-1.285 5.785 6.894-1.532 1.286-5.785-6.895z" />
    </Svg>
  );
}

export default SvgStackOverflowLine;
