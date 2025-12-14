import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";
import { useState } from "react";
import { useGetProfileQuery } from "./redux/api";
import { motion } from "framer-motion";
import PreLoader from "./components/utilities/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  // lazy loading and preloader //
  useGetProfileQuery();
  setTimeout(() => {
    setLoading(false);
  }, 1800);
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
