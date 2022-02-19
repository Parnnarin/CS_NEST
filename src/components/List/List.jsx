import {  ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons";
import { useState ,useRef  } from "react";
import Listitem from "../itemList/Listitem";
import React from "./list.scss"

export default function List() 
{
  const listRef = useRef()
  const[isMoved , setIsMoved] =  useState(false);
  const[slideNumber , setSlideNumber] = useState(0)
  const handleClick = (direction) =>
  {
    setIsMoved(true)
    let distance = listRef.current.getBoundingClientRect().x - 50
    if(direction === "left" && slideNumber > 0)
    {
      setSlideNumber(slideNumber - 1) ;
      listRef.current.style.transform = `translateX(${300 + distance }px)`
    } 

    if(direction === "right" && slideNumber < 6 )
    {
      setSlideNumber(slideNumber + 1) ;
      listRef.current.style.transform = `translateX(${-300+ distance }px)`
      
    }   
  }
  return(
    <div className="list"> 
        <span className="listTitle"> Recommend for you </span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
            className="slideArrow left" 
            onClick={()=>handleClick("left")}
            style={{display: !isMoved && "none"}}
            />
        
            <div className="container" ref={listRef}>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>
                <Listitem/>

            </div>
            
            <ArrowForwardIosOutlined className="slideArrow right" onClick={()=>handleClick("right")} />]

        </div>
    </div>
  );
}
 