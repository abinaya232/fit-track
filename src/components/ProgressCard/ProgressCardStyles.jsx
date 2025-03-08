import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  progressCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  stat: {
    alignItems: "center",
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007bff",
  },
  label: {
    fontSize: 14,
    color: "#666",
  },
  workoutButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  weeklyCard: {
    backgroundColor: "#E3E3E3",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    alignItems: "center",
  },
  weeklyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weeklyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  dayContainer: {
    alignItems: "center",
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: "#ddd",
    marginBottom: 5,
  },
  filledCircle: {
    backgroundColor: "#007bff",
  },
  dayLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
