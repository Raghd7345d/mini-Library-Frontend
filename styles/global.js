import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  p: {
    fontSize: 20,
    color: "#ffffff",
    backgroundColor: "#00000099",
    marginBottom: 40,
    marginLeft: 20,
    alignSelf: "center",
  },
  h1: {
    fontSize: 24,
    color: COLORS.accent,
    marginBottom: 12,
    marginTop: 40,
    alignSelf: "center",
    backgroundColor: "#00000099",
  },
  input: {
    backgroundColor: COLORS.light,
    color: COLORS.dark,
    padding: 12,
    borderRadius: 6,
    fontSize: 18,
    marginBottom: 12,
  },
  button: {
    backgroundColor: COLORS.grey,
  },
});
