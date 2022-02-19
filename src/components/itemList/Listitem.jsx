import React from "./listitem.scss"
import  listIM from '../../Assets/Image/MG_003.jpg'
import { Add, InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Listitem() {
  return( 
    <div className="listItem">
        <img src={listIM} alt="ImageTitle" />
    

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <InfoOutlined/>
          <Add/>
        </div>
        <div className="itemInfoTop">
          <span>6 part </span>
          <span></span>
        </div>
      </div>
    </div>

    
    
    );
}
