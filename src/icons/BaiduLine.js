import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBaiduLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M7.563 19.28a9.693 9.693 0 002.496-.217 8.798 8.798 0 012.98-.131 7.78 7.78 0 011.289.257c1.077.275 2.61.223 3.005-.41.29-.468.253-.787-.026-1.199-.06-.09-.126-.17-.188-.235l-.024-.025a25.109 25.109 0 01-.743-.618 25.578 25.578 0 01-1.753-1.66 16.153 16.153 0 01-1.577-1.893l-.036-.053c-.742-1.139-1.558-1.067-2.002-.318a9.593 9.593 0 01-.955 1.332c-.41.482-.83.89-1.306 1.297-.122.105-.502.42-.411.344-.004.003-.017.015.05-.071-.098.12-.95.877-1.2 1.162-.515.583-.722 1.08-.645 1.48.073.376.22.587.45.745a1.433 1.433 0 00.48.206c.033.003.072.005.116.007zm7.099-7.276c1.375 1.97 3.731 3.793 3.731 3.793s2.064 1.748.638 4.038c-1.426 2.29-5.253 1.278-5.253 1.278s-1.52-.49-3.286-.098c-1.765.395-3.286.245-3.286.245S5 21.015 4.553 18.701c-.446-2.314 2.06-4.04 2.258-4.284.196-.247 1.512-1.073 2.452-2.658.94-1.586 3.584-2.54 5.399.245zm5.538-1.42c0 .457.191 2.393-1.552 2.432-1.743.038-1.816-1.178-1.816-2.05 0-.913.187-2.205 1.59-2.205 1.4 0 1.778 1.369 1.778 1.824zm-5.429-2.777c-1.18-.152-1.447-1.222-1.333-2.293.095-.875 1.142-2.219 1.981-2.026.837.19 1.6 1.3 1.446 2.254-.152.957-.912 2.218-2.094 2.065zM9.755 7.44c-.861 0-1.56-.993-1.56-2.22 0-1.227.698-2.22 1.56-2.22.863 0 1.56.993 1.56 2.22 0 1.227-.697 2.22-1.56 2.22zm-3.793 4.566c-1.695.365-2.327-1.597-2.14-2.515 0 0 .2-1.987 1.576-2.11 1.093-.095 1.898 1.101 1.98 1.785.052.444.283 2.475-1.416 2.84z" />
    </Svg>
  );
}

export default SvgBaiduLine;
