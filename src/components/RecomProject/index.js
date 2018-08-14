import React from 'react';
import './styles.css';
import { Card } from 'reactstrap';
import LinesEllipsis from 'react-lines-ellipsis';
  import img from './a.jpg';



const RecomProjectsItem = (props) => {

  
  return (
      
    <div className="recom_projectItem_container">
        <br/>   
        <Card className = "recom_project_card">
           
            <div className = "recom_project_summary">
                <div>
                    <img
                    className = "recom_projectItem_creator_img"
                    src= {img}
                    alt = "hi"
                    />
                </div>

                <div className = "recom_projectItem_project_prop">
                    <p className = "recom_max_member"> <i class="fas fa-user-circle"></i>&nbsp;3/5명
                    
                    </p>
                </div>
                <div>
                <p className = "recom_region"> <i class="fas fa-map-marker-alt"></i>&nbsp;수도권 </p> 
                    </div>
                    <div className = "header">
            <p className = "recom_projectItem_intro1">Project&nbsp;<i class="fas fa-bookmark"></i></p>
            </div>
            </div>

            
            <div>
            <img 
                className = "recom_projectItem_img"
                src= {img}
                alt = "props.title"
            />
            </div>
            

            <div className = "recom_project_title">
                    <p className = "recom_projectItem_title"><i class="fas fa-caret-right"></i>&nbsp;색연필로 그림을 그려보자 </p>
                </div>

        </Card>
       
        <Card className = "recom_project_card">
           
           <div className = "recom_project_summary">
               <div>
                   <img
                   className = "recom_projectItem_creator_img"
                   src= {img}
                   alt = "hi"
                   />
               </div>

               <div className = "recom_projectItem_project_prop">
                   <p className = "recom_max_member"> <i class="fas fa-user-circle"></i>&nbsp;3/5명
                   
                   </p>
               </div>
               <div>
               <p className = "recom_region"> <i class="fas fa-map-marker-alt"></i>&nbsp;수도권 </p> 
                   </div>
                   <div className = "header">
           <p className = "recom_projectItem_intro1">Project&nbsp;<i class="fas fa-bookmark"></i></p>
           </div>
           </div>

           
           <div>
           <img 
               className = "recom_projectItem_img"
               src= {img}
               alt = "props.title"
           />
           </div>
           

           <div className = "recom_project_title">
                   <p className = "recom_projectItem_title"><i class="fas fa-caret-right"></i>&nbsp;색연필로 그림을 그려보자 </p>
               </div>

       </Card>

         <Card className = "recom_project_card">
           
           <div className = "recom_project_summary">
               <div>
                   <img
                   className = "recom_projectItem_creator_img"
                   src= {img}
                   alt = "hi"
                   />
               </div>

               <div className = "recom_projectItem_project_prop">
                   <p className = "recom_max_member"> <i class="fas fa-user-circle"></i>&nbsp;3/5명
                   
                   </p>
               </div>
               <div>
               <p className = "recom_region"> <i class="fas fa-map-marker-alt"></i>&nbsp;수도권 </p> 
                   </div>
                   <div className = "header">
           <p className = "recom_projectItem_intro1">Project&nbsp;<i class="fas fa-bookmark"></i></p>
           </div>
           </div>

           
           <div>
           <img 
               className = "recom_projectItem_img"
               src= {img}
               alt = "props.title"
           />
           </div>
           

           <div className = "recom_project_title">
                   <p className = "recom_projectItem_title"><i class="fas fa-caret-right"></i>&nbsp;색연필로 그림을 그려보자 </p>
               </div>

       </Card>
       <br/>
        </div>
    
  );
}



export default RecomProjectsItem;