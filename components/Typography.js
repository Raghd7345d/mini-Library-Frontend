import { Text, StyleSheet } from "react-native";
export function Typography({
  children,
  variant = "paragraph",
  style,
  ...restProps
}) {
  return (
    <Text style={{ ...styles[variant], ...style }} {...restProps}>
      {children}
    </Text>
  );
}
