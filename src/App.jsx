import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "./redux/api";
import MainSpinner from "./components/utilities/MainSpinner";

function App() {
  const [loading, setLoading] = useState(true);
  const { data, isLoading } = useGetProfileQuery();
  useEffect(() => {
    if (!isLoading) {
      setLoading(false);
    }
  }, [isLoading]);
  return (
    <div>
      {loading ? (
        <MainSpinner/>
      ) : (
        <RouterProvider router={routes}></RouterProvider>
      )}
    </div>
  );
}

export default App;
