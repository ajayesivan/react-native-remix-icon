import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRestaurant2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4.222 3.808l6.718 6.717-2.829 2.829-3.889-3.89a4 4 0 010-5.656zm10.046 8.338l-.853.854 7.07 7.071-1.413 1.414L12 14.415l-7.072 7.07-1.414-1.414 9.339-9.339c-.588-1.457.02-3.555 1.621-5.157 1.953-1.952 4.644-2.427 6.01-1.06 1.368 1.366.893 4.057-1.06 6.01-1.602 1.602-3.7 2.21-5.157 1.621z" />
    </Svg>
  );
}

export default SvgRestaurant2Fill;
