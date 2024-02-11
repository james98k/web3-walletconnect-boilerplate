import { FC } from "react";
import MainBtn from "./MainBtn";
// import './styles/MainLayout.scss'

const styles = {
    layout: {
        width: "500px",
        height : "700px",
        position: "fixed",
      display: "flex",

      alignItems: "center",
      justifyContent: "space-between",
      
      backgroundColor: "blue",
      paddingTop: "15px",
      zIndex: 1
    },
    centerBox: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      paddingRight: "10px",
      fontSize: "15px",
      fontWeight: "600",
      
    }
  } as const;

const MainLayout: FC<any> = () =>{
    return (
        <div style={{...styles.layout}}>
            <div style={{...styles.centerBox}}>
                <MainBtn/>
            </div>
        </div>
    );
};
export default MainLayout;