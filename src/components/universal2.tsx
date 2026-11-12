import { StyleSheet } from "react-native";

{/* 
  Improve styling so the inputs are easier to read and tap into.
  Everything is has the same background color so the contrast is blended.

  Widen input fields, add shaded background to each field
  
  Move styling into here so a stylesheet isn't needed at the bottom of each page and easier to update every page

*/}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
  },
  body: {
    fontSize: 16,
    textAlign: "center",
  },
  hint: {
    marginTop: 24,
    fontSize: 12,
    color: "#6b7280",
    textAlign: "center",
  },
  button: {
    backgroundColor: "black",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
  },
  cardMain: {
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  cardSub: {
    fontSize: 14,
    color: "#6b7280",
  },
});
