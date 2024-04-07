const colors = {
  primary: "#22223B",
  secondary: "#4A4E69",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#9A8C98",
  lightGray: "#F2E9E4",
  darkGray: "#C9ADA7",
  transparent: "transparent",
} as const;

export type ColorName = keyof typeof colors;
export type Color = typeof colors[ColorName];

export default colors;