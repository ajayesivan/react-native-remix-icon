import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgShakeHandsFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19.291 6h.71a1 1 0 011 1v7a1 1 0 01-1 1h-2l-4.17-5.836a2 2 0 00-2.201-.753l-2.486.746a2 2 0 01-1.988-.502l-.293-.293a1 1 0 01.152-1.539l5.401-3.6a2 2 0 012.183-.024l4.156 2.645A1 1 0 0019.29 6zM5.027 14.295l-1.616 1.414a1 1 0 00.041 1.538l5.14 4.04a1 1 0 001.487-.29l.704-1.232a2 2 0 00-.257-2.338l-2.702-2.973a2 2 0 00-2.797-.16zM7.046 5H3a1 1 0 00-1 1v7.516a2 2 0 00.35 1.13 2.61 2.61 0 01.074-.066l1.615-1.414a3.5 3.5 0 014.895.28l2.702 2.972a3.5 3.5 0 01.45 4.09l-.655 1.146a2 2 0 001.738-.155l4.41-2.646a1 1 0 00.299-1.438l-5.267-7.379a.5.5 0 00-.55-.188l-2.486.745a3.5 3.5 0 01-3.48-.877l-.293-.293a2.5 2.5 0 01.38-3.848L7.047 5z" />
    </Svg>
  );
}

export default SvgShakeHandsFill;
