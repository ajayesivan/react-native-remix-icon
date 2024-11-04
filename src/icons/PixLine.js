import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

function SvgPixLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#pix-line_svg__clip0_1315_1150)">
        <Path d="M1.747 9.525a3.5 3.5 0 000 4.95l7.778 7.778a3.5 3.5 0 004.95 0l7.778-7.778a3.5 3.5 0 000-4.95l-7.778-7.778a3.5 3.5 0 00-4.95 0L1.747 9.525zm4.242-1.414a1.5 1.5 0 012.122 0l2.475 2.475a2 2 0 002.828 0L15.89 8.11a1.5 1.5 0 012.121 0l2.829 2.828a1.5 1.5 0 010 2.122l-2.829 2.828v.001a1.5 1.5 0 01-2.121 0l-2.475-2.476a2 2 0 00-2.828 0L8.11 15.89a1.5 1.5 0 01-2.12 0l-2.83-2.828a1.5 1.5 0 010-2.122l2.828-2.828zm9.785-2.237c-.475.169-.92.443-1.3.823L12 9.172 9.525 6.697a3.486 3.486 0 00-1.299-.823l2.713-2.713a1.5 1.5 0 012.121 0l2.714 2.713zm0 12.252l-2.713 2.713a1.5 1.5 0 01-2.122 0l-2.713-2.713c.474-.169.92-.443 1.299-.823L12 14.828l2.475 2.475c.38.38.824.654 1.299.823z" />
      </G>
      <Defs>
        <ClipPath id="pix-line_svg__clip0_1315_1150">
          <Rect fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgPixLine;
