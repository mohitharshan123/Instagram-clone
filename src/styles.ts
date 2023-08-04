import { StyleSheet } from "react-native";

export const GLOBAL_STYLES = StyleSheet.create({
  dark: {
    backgroundColor: "black",
    username: {
      bold: {
        color: "white",
        fontFamily: "SF UI Display",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "700",
      },
      light: { color: "white", fontSize: 11 },
    },
  },
  light: {
    backgroundColor: "whites",
    username: {
      bold: {
        color: "black",
        fontFamily: "SF UI Display",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 16,
      },
      light: { color: "black", fontSize: 11 },
    },
  },
});
