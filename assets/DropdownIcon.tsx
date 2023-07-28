import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DropdownIcon: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.333 10 8 14.667 12.667 10"
    />
  </Svg>
);
export default DropdownIcon;
