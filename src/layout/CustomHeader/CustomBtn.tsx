import { FC } from "react";

import { Button, Layout } from "antd";

import ConnectAccount from "../../components/Account/ConnectAccount";
import ChainSelector from "../../components/ChainSelector";


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
    fontWeight: "600",
    // border: "1px solid red",
    justifyContent : "center",
  }
} as const;



const CustomBtn: FC<any> =()=>{

    return (
        <div style={styles.headerRight}>
            <ChainSelector />
            <ConnectAccount />
            
          </div>
      );

}


export default CustomBtn;




