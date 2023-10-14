import { BrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "./redux/api";
import MainSpinner from "./components/utilities/MainSpinner";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const { data, isLoading } = useGetProfileQuery();
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    }
  }, [isLoading]);
  return (
    <div>
      {loading ? (
        <MainSpinner />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
        >
          <RouterProvider router={routes}></RouterProvider>
        </motion.div>
      )}
    </div>
  );
}

export default App;
