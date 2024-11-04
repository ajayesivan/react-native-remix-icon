import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFileCloudFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.997 2L21 8l.001 4.26A5.466 5.466 0 0017.5 11l-.221.004a5.503 5.503 0 00-5.127 4.205l-.016.074-.03.02A4.75 4.75 0 0010.878 22L3.993 22a.993.993 0 01-.986-.876L3 21.008V2.992c0-.498.387-.927.885-.985L4.002 2h10.995zM17.5 13a3.5 3.5 0 013.5 3.5l-.002.103a2.75 2.75 0 01-.58 5.392L20.25 22h-5.5l-.168-.005a2.75 2.75 0 01-.579-5.393L14 16.5a3.5 3.5 0 013.5-3.5z" />
    </Svg>
  );
}

export default SvgFileCloudFill;
