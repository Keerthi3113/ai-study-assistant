import AppRoutes from "./routes/AppRoutes";

function App() {
  return <AppRoutes />;
}
useEffect(() => {
  document.title = "StudyMate AI";
}, []);

export default App;