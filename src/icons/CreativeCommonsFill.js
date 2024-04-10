import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCreativeCommonsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zM9 8c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.828 2.828l-1.414-1.414a2 2 0 110-2.828l1.415-1.413A3.988 3.988 0 009 8zm7 0c-2.208 0-4 1.792-4 4a4.001 4.001 0 006.828 2.828l-1.414-1.414a2 2 0 110-2.828l1.415-1.413A3.988 3.988 0 0016 8z" />
    </Svg>
  );
}

export default SvgCreativeCommonsFill;
