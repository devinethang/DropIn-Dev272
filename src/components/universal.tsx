import { StyleSheet } from "react-native";

<<<<<<< HEAD
{
  /* 
  Improve styling so the inputs are easier to read and tap into.
  Everything is has the same background color so the contrast is blended.

  Widen input fields, add shaded background to each field
  
  Move styling into here so a stylesheet isn't needed at the bottom of each page and easier to update every page

*/
}

// Default colors
export const colors = {
  bg: "#b0c2e6",
  border: "#475569",
  error: "#b91c1c",
  surface: "#c9d3e7",
  text: "#111827",
  primary: "#9cadd8",
=======
export const colors = {
  bg: "#F8FAFF",
  border: "#C4CBD9",
  error: "#B91C1C",
  surface: "#FFFFFF",
  text: "#10265C",
  primary: "#2455D6",
  secondary: "#536B99",
  accent: "#A9C7FF",
  burgundy: "#10265C",
  teal: "#2455D6",
  blue: "#A9C7FF",
  slate: "#536B99",
  white: "#FFFFFF",
  muted: "#667899",
  silver: "#C4CBD9",
  ice: "#E9EEFA",
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
};

export const styles = StyleSheet.create({
  main: {
<<<<<<< HEAD
    backgroundColor: colors.bg,
  },
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: "700",
    textAlign: "left",
  },
  list: {
    padding: 16,
    gap: 0,
  },
  row: {
    padding: 12,
    backgroundColor: colors.bg,
    flexDirection: "column",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    borderRadius: 8,
    gap: 2,
  },
  rowTitle: {
    fontWeight: "600",
  },
=======
    flex: 1,
    backgroundColor: colors.bg,
  },

  container: {
    flex: 1,
    padding: 20,
    gap: 16,
    backgroundColor: colors.bg,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    color: colors.text,
  },

  list: {
    padding: 8,
    gap: 12,
  },

  row: {
    padding: 16,
    backgroundColor: colors.surface,
    flexDirection: "column",
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    gap: 6,
  },

  rowTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
  },

>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
<<<<<<< HEAD
    backgroundColor: colors.bg,
    borderRadius: 8,
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  editButton: {
    textAlign: "right",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 6,
  },
  alarmInfo: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  newAlarm: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.bg,
    borderRadius: 8,
    padding: 5,
  },
  item: {
    fontSize: 30,
    textAlign: "center",
    padding: 5,
  },
  timeOfDay: {
    width: 130,
    backgroundColor: colors.surface,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
  },

  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 10,
    alignSelf: "stretch",
    backgroundColor: colors.surface,
    color: colors.text,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 20,
  },

  inputError: { borderColor: colors.error },
  error: { color: colors.error, fontSize: 12 },
  label: { fontWeight: "600" },

  form: {
    flexGrow: 1,
    padding: 16,
    gap: 16,
    backgroundColor: colors.bg,
  },
  timeInput: { flex: 1 },
=======
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 8,
  },

  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  editButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
    borderRadius: 10,
    padding: 10,
  },

  item: {
    fontSize: 20,
    textAlign: "center",
    padding: 8,
    color: colors.text,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    alignSelf: "stretch",
    backgroundColor: colors.surface,
    color: colors.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 50,
  },

  inputError: {
    borderColor: colors.error,
  },

  error: {
    color: colors.error,
    fontSize: 13,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },

  form: {
    flexGrow: 1,
    padding: 20,
    gap: 16,
    backgroundColor: colors.bg,
  },

  timeInput: {
    flex: 1,
  },
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155

  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
<<<<<<< HEAD
    fontSize: 22,
    color: colors.text,
=======
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },

  dataDisplay: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
<<<<<<< HEAD
    gap: 8,
  },

  alarmData: {
    fontWeight: "600",
=======
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
<<<<<<< HEAD
    gap: 8,
  },

  link: {
    color: "",
  },

  button: {
    backgroundColor: "black",
    position: "absolute",
    top: 10,
    right: 16,
    elevation: 3,
    zIndex: 1,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignSelf: "flex-start",
  },

  buttonText: {
    color: "#fff",
    fontSize: 30,
=======
    gap: 12,
  },

  link: {
    color: colors.primary,
    fontWeight: "600",
  },

  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
    fontWeight: "600",
  },

  card: {
<<<<<<< HEAD
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

  listButton: {
    display: "flex",
    justifyContent: "center",
    padding: 16,
    marginVertical: 6,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
=======
    padding: 18,
    borderRadius: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 8,
  },

  cardMain: {
    gap: 6,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
  },

  cardSub: {
    fontSize: 14,
    color: colors.muted,
  },

  listButton: {
    justifyContent: "center",
    padding: 18,
    marginVertical: 6,
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    gap: 6,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },

  LoginButton: {
    height: 50,
<<<<<<< HEAD
    backgroundColor: "black",
    borderRadius: 8,
=======
    backgroundColor: colors.primary,
    borderRadius: 12,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  LoginInput: {
    height: 50,
    borderWidth: 1,
<<<<<<< HEAD
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
=======
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: colors.surface,
    color: colors.text,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },

  WelcomeTitle: {
    fontSize: 28,
<<<<<<< HEAD
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#111",
=======
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
    color: colors.text,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },

  WelcomeContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
<<<<<<< HEAD
    backgroundColor: "#fff",
=======
    backgroundColor: colors.bg,
>>>>>>> 134caeec8a90f85143242dfdf6f9f82ac9718155
  },
});
