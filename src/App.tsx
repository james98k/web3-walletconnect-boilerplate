import { Buffer } from "buffer";

// import { useState } from "react";

import { Layout } from "antd";
import "./layout/MainBtn";

import "styles/App.css";
import MainBtn from "./layout/MainBtn";
import MainLayout from "layout/MainLayout";

const styles = {
  layout: {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif",
    
  }
} as const;

function App() {
  // const { defaultAlgorithm, darkAlgorithm } = theme;
  // const [isDarkMode, setIsDarkMode] = useState(true);
  if (!window.Buffer) window.Buffer = Buffer;

  return (
   
      <Layout style={styles.layout}>
       <MainLayout/>
      </Layout>
    
  );
}

export default App;
