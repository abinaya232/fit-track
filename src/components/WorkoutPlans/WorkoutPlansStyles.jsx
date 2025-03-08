import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  lightHeader: {
    backgroundColor: "#17a2b8",
  },
  darkHeader: {
    backgroundColor: "#162447",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  lightText: {
    color: "#212529",
  },
  darkText: {
    color: "#f8f9fa",
  },
  addButton: {
    backgroundColor: "#ff9800",
    padding: 10,
    borderRadius: 6,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  planTitle: {
    padding: 12,
    marginTop: 10,
    borderRadius: 6,
  },
  lightPlanTitle: {
    backgroundColor: "#e3f2fd",
  },
  darkPlanTitle: {
    backgroundColor: "#30475e",
  },
  exerciseItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  lightExerciseItem: {
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  darkExerciseItem: {
    backgroundColor: "#222831",
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  exerciseReps: {
    fontSize: 15,
  },
  startButton: {
    backgroundColor: "#20c997",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  stopButton: {
    backgroundColor: "#ff5252",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  stopButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  timerContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  timerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  darkTimerText: {
    color: "#f1f1f1",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    width: 320,
    padding: 20,
    borderRadius: 10,
  },
  lightModalContent: {
    backgroundColor: "#ffffff",
  },
  darkModalContent: {
    backgroundColor: "#1f4068",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    borderRadius: 6,
  },
  lightInput: {
    borderColor: "#ced4da",
    color: "#212529",
  },
  darkInput: {
    borderColor: "#5a5a5a",
    color: "#f8f9fa",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 6,
  },
  saveButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
