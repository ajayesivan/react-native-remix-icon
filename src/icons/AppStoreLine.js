import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAppStoreLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zM8.823 15.343l-.79 1.37a.823.823 0 11-1.428-.822l.589-1.016c.66-.206 1.201-.048 1.629.468zM13.21 8.66l2.423 4.194h2.141c.456 0 .823.367.823.822a.82.82 0 01-.823.823h-1.19l.803 1.391a.824.824 0 01-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787zm.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 01-.822-.823.82.82 0 01.822-.822h2.097l2.685-4.653-.838-1.456a.824.824 0 011.427-.823l.359.633.367-.633a.823.823 0 011.125-.302z" />
    </Svg>
  );
}

export default SvgAppStoreLine;
