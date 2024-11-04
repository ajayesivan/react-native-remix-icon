import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMic2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1a5 5 0 015 5v6a5 5 0 01-10 0V6a5 5 0 015-5zM2.192 13.961l1.962-.392a8.003 8.003 0 0015.692 0l1.962.392C20.896 18.545 16.852 22 12 22c-4.851 0-8.896-3.455-9.808-8.039z" />
    </Svg>
  );
}

export default SvgMic2Fill;
