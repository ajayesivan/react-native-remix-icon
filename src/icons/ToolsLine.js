import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgToolsLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5.33 3.272a3.5 3.5 0 014.254 4.962l10.709 10.71-1.414 1.414-10.71-10.71a3.502 3.502 0 01-4.962-4.255L5.444 7.63a1.5 1.5 0 002.121-2.121L5.33 3.272zm10.367 1.883l3.182-1.768 1.414 1.415-1.768 3.182-1.768.353-2.12 2.121-1.415-1.414 2.121-2.121.354-1.768zm-6.718 8.132l1.415 1.414-5.304 5.303a1 1 0 01-1.492-1.327l.078-.087 5.303-5.303z" />
    </Svg>
  );
}

export default SvgToolsLine;
