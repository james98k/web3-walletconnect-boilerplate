import { Buffer } from "buffer";

import { useState } from "react";

import { Layout, ConfigProvider, theme } from "antd";

import DisplayPane from "./components/displayPane/DisplayPane";
import { MainContent} from "./layout";

import "./styles/App.css";
// import CustomBtn from "layout/CustomHeader/CustomBtn";

const styles = {
  layout: {
    width: "auto",
    // height: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif",
    // border : "solid 1px blue"
  },
  wrapper: {
    width : "100px"
  }
} as const;

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);
  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <Layout style={styles.layout}>
        {/* <CustomHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} /> */}
        <MainContent>
          <DisplayPane isDarkMode={isDarkMode} />

        </MainContent>
        {/* <CustomFooter /> */}
      </Layout>
    </ConfigProvider>
  );
}

export default App;
