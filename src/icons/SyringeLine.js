import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSyringeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.678 7.98l-1.414 1.413-2.122-2.12-2.121 2.12 3.536 3.536-1.415 1.414-.707-.707L11.071 20H5.414l-2.12 2.121-1.415-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.121-2.121-2.121-2.121 1.414-1.415 5.657 5.657zm-5.657 4.242l-4.243-4.243-1.414 1.414 2.121 2.122-1.414 1.414-2.121-2.121-1.414 1.414 2.121 2.121-1.414 1.414-2.121-2.121-.122.121V18h4.243l5.778-5.778z" />
    </Svg>
  );
}

export default SvgSyringeLine;
