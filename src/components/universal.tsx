import { StyleSheet } from "react-native";

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
};

export const styles = StyleSheet.create({
  main: {
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

  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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

  fieldRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dataDisplay: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    gap: 10,
    borderWidth: 1,
    borderColor: colors.border,
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "600",
  },

  card: {
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
  },

  LoginButton: {
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },

  LoginInput: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: colors.surface,
    color: colors.text,
  },

  WelcomeTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 24,
    textAlign: "center",
    color: colors.text,
  },

  WelcomeContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: colors.bg,
  },
});
