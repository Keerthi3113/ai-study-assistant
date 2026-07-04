import { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  useEffect(() => {
    document.title = "StudyMate AI";
  }, []);

  return <AppRoutes />;
}

export default App;