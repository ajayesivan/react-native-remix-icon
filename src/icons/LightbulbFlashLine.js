import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLightbulbFlashLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M9.973 18h4.054c.132-1.202.745-2.194 1.74-3.277.113-.122.832-.867.917-.973a6 6 0 10-9.37-.002c.086.107.807.853.918.974.996 1.084 1.609 2.076 1.741 3.278zM14 20h-4v1h4v-1zm-8.246-5a8 8 0 1112.49.002C17.624 15.774 16 17 16 18.5V21a2 2 0 01-2 2h-4a2 2 0 01-2-2v-2.5C8 17 6.375 15.774 5.754 15zM13 10.004h2.5l-4.5 6v-4H8.5L13 6v4.005z" />
    </Svg>
  );
}

export default SvgLightbulbFlashLine;
