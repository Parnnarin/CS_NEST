import "./featured.scss"
import  BG from '../../Assets/Image/MG_002.jpg'
import  Title from '../../Assets/Image/L_6003.png'
import { InfoOutlined, PlayArrow } from "@material-ui/icons";

export default function Featured() 
{
  return (
        
    <div className="featured">
            
            <img width="100%" src={BG} alt="Background"/>
         
        
        <div className="info">
            <img src={Title} alt="Title" />
        

             <div className="desc">
             แนวคิดของการเขียนโปรแกรมแบบโพรซีเดอร์เบื้องต้น ประเภทของข้อมูล โครงสร้างการควบคุม ฟังก์ชัน อะเรย์ แฟ้ม และกลไกการทํางาน การทดสอบ การหาที่ผิดของโปรแกรม การจัดการข้อผิดพลาด Fundamental concepts of procedural programming, data types, control structures, functions, arrays, files, mechanics of running, testing, debugging, error handling.
             </div> 
            
            <div className="buttons">
            
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
            
                <button className="moreInfo">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  );
}
