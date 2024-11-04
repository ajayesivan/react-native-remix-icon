import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFediverseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M11 11.5V8.232L8.17 9.866l-1-1.732L10 6.5 7.17 4.866l1-1.732L11 4.768V1.5h2v3.268l2.83-1.634 1 1.732L14 6.5l2.83 1.634-1 1.732L13 8.232V11.5h-2zm10.46 1.384l-2.83 1.634V11.25h-2v3.268l-2.83-1.634-1 1.732 2.83 1.634-2.83 1.634 1 1.732 2.83-1.634v3.268h2v-3.268l2.83 1.634 1-1.732-2.83-1.634 2.83-1.634-1-1.732zM7.37 17.982v3.268h-2v-3.268l-2.83 1.634-1-1.732 2.83-1.634-2.83-1.634 1-1.732 2.83 1.633V11.25h2v3.268l2.83-1.633 1 1.732-2.83 1.634 2.83 1.634-1 1.732-2.83-1.634z" />
    </Svg>
  );
}

export default SvgFediverseLine;
