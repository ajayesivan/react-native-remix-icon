import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPantoneLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.765 8l-.296-.73a1 1 0 01.553-1.302l9.272-3.746a1 1 0 011.302.552l5.619 13.908a1 1 0 01-.553 1.302L12.39 21.73a1 1 0 01-1.302-.553L11 20.96V21H7a1 1 0 01-1-1v-.27l-3.35-1.353a1 1 0 01-.552-1.302L5.765 8zM8 19h2.209L8 13.533V19zm-2-6.244l-1.673 4.141L6 17.608v-4.852zm1.698-5.309l4.87 12.054 7.418-2.997-4.87-12.053-7.418 2.996zm2.979 2.033a1 1 0 11-.75-1.855 1 1 0 01.75 1.855z" />
    </Svg>
  );
}

export default SvgPantoneLine;
