import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSyringeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.678 7.98l-1.414 1.413-2.122-2.12-2.121 2.12 3.536 3.536-1.415 1.414-.707-.707L11.071 20H5.414l-2.12 2.121-1.415-1.414L4 18.586v-5.657l6.364-6.364-.707-.707 1.414-1.414 3.536 3.535 2.121-2.121-2.121-2.121 1.414-1.415 5.657 5.657zm-12.02 6.363l-2.83-2.828-1.414 1.414 2.829 2.828 1.414-1.414zm2.828-2.828L9.656 8.686l-1.414 1.415 2.828 2.828 1.415-1.414z" />
    </Svg>
  );
}

export default SvgSyringeFill;
