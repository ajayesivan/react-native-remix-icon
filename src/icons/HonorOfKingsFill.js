import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHonorOfKingsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21.16 4.258c.033 3.5.59 4.81.787 6.701a9.98 9.98 0 01-2.875 8.112c-3.666 3.666-9.471 3.89-13.4.673l2.852-2.853a6.002 6.002 0 008.368-8.368l4.267-4.265zm-2.83-.002l-2.852 2.853a6.002 6.002 0 00-8.368 8.368l-4.267 4.265c-.034-3.5-.591-4.811-.788-6.701A9.98 9.98 0 014.93 4.929c3.666-3.666 9.471-3.89 13.4-.673zM12 8a4 4 0 110 8 4 4 0 010-8zm0 2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Svg>
  );
}

export default SvgHonorOfKingsFill;
