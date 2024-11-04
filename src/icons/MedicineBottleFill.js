import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMedicineBottleFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 5v2a3 3 0 013 3v11a1 1 0 01-1 1H5a1 1 0 01-1-1V10a3 3 0 013-3V5h10zm-4 6h-2v2H9v2h1.999L11 17h2l-.001-2H15v-2h-2v-2zm6-9v2H5V2h14z" />
    </Svg>
  );
}

export default SvgMedicineBottleFill;
