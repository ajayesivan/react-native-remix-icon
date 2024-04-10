import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMarkPenLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.243 4.511L8.505 11.25l-.707 2.121-1.04 1.041 2.828 2.828 1.04-1.04 2.122-.708 6.737-6.737-4.242-4.243zm6.364 3.536a1 1 0 010 1.414l-7.778 7.778-2.122.707-1.414 1.415a1 1 0 01-1.414 0l-4.243-4.243a1 1 0 010-1.414L6.05 12.29l.707-2.122 7.779-7.778a1 1 0 011.414 0l5.657 5.657zm-6.364-.707l1.414 1.414-4.95 4.95-1.414-1.414 4.95-4.95zm-10.96 9.546l2.828 2.828-1.414 1.415-4.243-1.415 2.829-2.828z" />
    </Svg>
  );
}

export default SvgMarkPenLine;
