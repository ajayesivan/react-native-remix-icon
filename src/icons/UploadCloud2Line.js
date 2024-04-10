import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadCloud2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 12.586l4.243 4.242-1.415 1.415L13 16.415V22h-2v-5.587l-1.828 1.83-1.415-1.415L12 12.586zM12 2a7.001 7.001 0 016.954 6.194A5.5 5.5 0 0118 18.978v-2.014a3.5 3.5 0 10-1.111-6.91 5 5 0 10-9.777 0 3.5 3.5 0 00-1.292 6.88l.18.03v2.014a5.5 5.5 0 01-.954-10.784A7 7 0 0112 2z" />
    </Svg>
  );
}

export default SvgUploadCloud2Line;
