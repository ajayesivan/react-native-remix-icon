import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDeleteBack2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.535 3h14.464a1 1 0 011 1v16a1 1 0 01-1 1H6.535a1 1 0 01-.833-.445l-5.333-8a1 1 0 010-1.11l5.333-8A1 1 0 016.535 3zm.535 2l-4.667 7 4.667 7H20V5H7.07zM13 10.586l2.828-2.829 1.414 1.415L14.413 12l2.829 2.828-1.414 1.415-2.829-2.829-2.828 2.829-1.414-1.415L11.585 12 8.757 9.172l1.414-1.415 2.828 2.829z" />
    </Svg>
  );
}

export default SvgDeleteBack2Line;
