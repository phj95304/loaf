import React from 'react';
import './styles.css';
import { Card } from 'reactstrap';
 
  import img from './a.jpg';



const RecomProjectsItem = (props) => {

  
  return (
      
    <div className="recom_projectItem_container">
        
        <Card className = "recom_project_card">
            <div className = "header">
            <p className = "recom_projectItem_intro1">Project</p>
            </div>
            <div className = "recom_project_summary">
                <div>
                    <img
                    className = "recom_projectItem_creator_img"
                    src= {img}
                    alt = "hi"
                    />
                </div>
                <div className = "recom_project_title">
                    <p className = "recom_projectItem_title"> 색연필로 그림을 그려보자 </p>
                </div>

                <div className = "recom_projectItem_project_prop">
                    <p className = "recom_max_member"> 3/5명
                    <span className = "recom_region"> 수도권 </span> 
                    </p>
                </div>

            </div>

            
            <div>
            <img 
                className = "recom_projectItem_img"
                src= {img}
                alt = "props.title"
            />
            </div>
            

            <div className = "recom_projectItem_caption">    
            dmdkkkdkkkkkkkkkkkkkk
            </div>

        </Card>

        <br/>
        </div>
    
  );
}



export default RecomProjectsItem;