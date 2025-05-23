// Global styles
import "./App.css";

// Page component
import Home from "./pages/Home";

// Context provider
import KumuduContextProvider from "./store/KumuduContext";

// Main App component
function App() {
  return (
    <KumuduContextProvider>
      <Home />
    </KumuduContextProvider>
  );
}

export default App;
