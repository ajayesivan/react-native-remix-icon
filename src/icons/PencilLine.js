import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPencilLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.728 9.576l-1.414-1.414L5 17.476v1.414h1.414l9.314-9.314zm1.414-1.414l1.414-1.414-1.414-1.414-1.414 1.414 1.414 1.414zm-9.9 12.728H3v-4.243L16.435 3.212a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 20.89z" />
    </Svg>
  );
}

export default SvgPencilLine;
