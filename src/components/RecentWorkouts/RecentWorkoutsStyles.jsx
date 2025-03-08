import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 10,
  },
  scrollView: {
    paddingLeft: 15,
  },
  card: {
    width: 160,
    height: 180,
    backgroundColor: "#FF5733",
    borderRadius: 12,
    padding: 10,
    marginRight: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 12,
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  duration: {
    fontSize: 12,
    color: "#fff",
  },
  calories: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default styles;
