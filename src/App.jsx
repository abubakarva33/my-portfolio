import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";
import { useEffect, useState } from "react";
import { useGetProfileQuery } from "./redux/api";
import { motion } from "framer-motion";
import PreLoader from "./components/Utilities/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const { isLoading } = useGetProfileQuery();
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
        <PreLoader />
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
