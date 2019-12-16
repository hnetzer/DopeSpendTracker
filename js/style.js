// Get screen dimensions
import { Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");


const dimensions = {
  screenHeight: height,
  screenWidth: width,
}

// App background
// export const bkg = "#F1F5FF";
// export const bkgaccent = "rgba(130,158,245,1)";

// Global colors
const colors = {
  primary: "#3399FF",
  secondary: "#454545",
  red: "#E74C3C",
  blue: "#3498DB",
  green: "#2ECC71",
  purple: "#9b59b6",
  orange: "#E67E22",
  yellow: "#F1C40F",
  teal: "#1AbC9C",
  white: "#FFFFFF",
  grey: "#999999",
  lightgrey: "#CCCCCC",
  darkgrey: "#333333"
}


// Global styling
const basefontsize = 14;
const basePadding = dimensions.screenHeight * 0.02;


// Relative font sizes
const fontSizes = {
  hugeheader: basefontsize * 2.6,
  bigheader: basefontsize * 2.2,
  header: basefontsize * 1.6,
  smallheader: basefontsize * 1.4,
  tinyheader: basefontsize * 1.1
}

const opacities = {
  faded: 0.8,
  veryfaded: 0.7
}

// Global borders
const border = {
  radius: 18,
  width: 1,
  color: "#DDDDDD"
}

module.exports = {
  colors,
  dimensions,
  basePadding,
  border,
  fontSizes,
  opacities
}
