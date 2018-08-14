import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Card} from 'reactstrap';
import img3 from '../../img/raw_img.jpg'




  const MemberItem = (props) => (
  
    <div className="member_container">

    <div>
      <Card className="member_card">
      <div className = "member_card_row1">
      <p className = "member_intro0"> Member <i class="fas fa-bookmark"></i> </p>
      </div>

      <div className = "member_card_row2">
      <div className = "member_body"> 
        
      <div className = "member_img_history">
        <img className = "member_img" src = {img3} alt = "hi33333" />
        </div>

        <div className = "member_prop"> 
          <p className = "member_name"> <i class="fas fa-user"></i>&nbsp;hiJisuuuu </p>
          <p className = "member_univ"><i class="fas fa-graduation-cap"></i>한성대학교 </p>
          <p className = "member_residence"><i class="fas fa-map-marker-alt"></i> 수도권 </p> 
        
        </div>

        <div className = "project_history">
            <p className = "on_project"><i class="far fa-lightbulb"></i>진행중 :1 </p>
            <p className = "last_project"><i class="fas fa-lightbulb"></i> 완료 :4 </p>
            <button className = "go_to_profile"><i class="fas fa-caret-right"></i> 프로필</button>
          </div>
          </div>
      </div>
      <div className = "member_card_row3">
              <div>
              <p className = "member_intro2"> <i class="fab fa-slack"></i> 관련태그 </p>
              </div>
              {/*{props.tags.map(tag => <p className = "tag" {...tag} key = {})}*/} 
      </div>

      <div className = "hia">
          <div/>
          <div>
            <p className = "tag"> #JAVA </p>
          </div>
          <div>
            <p className = "tag"> #html5 </p>
          </div>
          <div>
            <p className = "tag"> #React.js </p>
          </div>
      </div>
    
      </Card>
      <br/>
    </div>
</div>
);

export default MemberItem;