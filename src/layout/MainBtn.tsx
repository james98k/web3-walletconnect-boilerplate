import { FC } from "react";

import { Layout } from "antd";

import ConnectAccount from "components/Account/ConnectAccount";
import ChainSelector from "components/ChainSelector";
import { useWindowWidthAndHeight } from "hooks";

const { Header } = Layout;

const styles = {
  header: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent",
    paddingTop: "15px",
    zIndex: 1
  },
  headerRight: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    paddingRight: "10px",
    fontSize: "15px",
    fontWeight: "600"
  }
} as const;


const MainBtn: FC<any> = () => {
  const { isMobile } = useWindowWidthAndHeight();


  return (
    <Header style={{ ...styles.header, padding: isMobile ? "15px 5px 0 5px" : "15px 20px 0 20px" }}>
     <ChainSelector />
        <ConnectAccount />
        
    </Header>
  );
};

export default MainBtn;

type LogoProps = {
  isDarkMode: boolean;
};

export const Logo: FC<LogoProps> = () => {
  const { isMobile } = useWindowWidthAndHeight();

  return (
    <div style={{ paddingTop: isMobile ? "25px" : "40px" }}>
      <img
       
        alt="web3Boilerplate_logo"
        width={isMobile ? "70px" : "90px"}
      />
    </div>
  );
};
