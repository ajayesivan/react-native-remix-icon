import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPencilRuler2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.636 12.707l1.828 1.829L8.88 13.12l-1.83-1.827 1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414 1.826 1.83 1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 011.414 0l4.242 4.242a1 1 0 010 1.414L8.464 21.192a1 1 0 01-1.414 0L2.808 16.95a1 1 0 010-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 010-1.415l2.829-2.828a1 1 0 011.414 0l2.83 2.828-4.244 4.243z" />
    </Svg>
  );
}

export default SvgPencilRuler2Fill;
