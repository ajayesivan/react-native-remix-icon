import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPencilFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.9 6.855l4.242 4.242-9.9 9.9H3v-4.243l9.9-9.9zm1.414-1.415l2.121-2.121a1 1 0 011.414 0l2.829 2.828a1 1 0 010 1.415l-2.122 2.121-4.242-4.243z" />
    </Svg>
  );
}

export default SvgPencilFill;
