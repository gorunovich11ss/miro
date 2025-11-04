import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      <Outlet />
    </div>
  );
}

export default App;
