import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDropperFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.536 2.807a4 4 0 015.656 5.657l-2.828 2.829.354.354a1 1 0 01-1.415 1.414l-.353-.354-6.215 6.215a4 4 0 01-2.044 1.094l-1.754.35a2 2 0 00-1.022.548l-.986.986a1 1 0 01-1.414 0L2.1 20.485a1 1 0 010-1.414l.986-.986a2 2 0 00.546-1.022l.351-1.754a4 4 0 011.094-2.044l6.215-6.215-.354-.353a1 1 0 011.415-1.414l.353.353 2.829-2.829zm-2.829 5.658l-6.215 6.214a2 2 0 00-.547 1.022l-.35 1.755A4 4 0 014.5 19.5a4 4 0 012.044-1.094l1.754-.351a2 2 0 001.022-.547l6.215-6.215-2.829-2.828z" />
    </Svg>
  );
}

export default SvgDropperFill;
