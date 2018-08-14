import React from 'react';
import { Card, CardBody,
  CardTitle, CardText,Button} from 'reactstrap';
import './landing.css'


const Landing = (props) => {
    return(
      <div>
      <Card>
        
        <CardBody className = "page1">
          <br/><br/><br/>
          <CardTitle className = "page1_title">대학생 프로젝트 커뮤니티 LOAF <br/>
          생각만 하던 프로젝트, 이제는 실현시켜 보자.</CardTitle>
          <br/><br/>
          <CardText className = "page1_text"> LOAF는 대학생의 프로젝트 커뮤니티 플랫폼입니다.</CardText>
          <CardText className = "page1_text"> 다양한 프로젝트를 실행하고 성장해가고 싶다면</CardText>
          <CardText className = "page1_text"> &nbsp;&nbsp;&nbsp;&nbsp; Loaf와 함께 시작해 보세요.</CardText>
          <br/><br/> <br/>
        </CardBody>
        
        <CardBody className = "page2">
          <br/>
          <CardTitle className = "page2_title">프로젝트 
          <span className = "page2_btn_m">
          <Button className = "page2_btn"><i class="fas fa-external-link-alt"></i>&nbsp;바로가기</Button>
          </span>
          </CardTitle>
          <br/>
          <CardText className = "page2_text"> 생각만 하던 프로젝트를 올려 다양한 사람들과 함께할 수 있습니다.</CardText>
          <CardText className = "page2_text"> 당신이 하고 싶은 프로젝트를 추천받아 보세요. </CardText>
          
          <br/><br/>
        </CardBody>

      </Card>

      <Card>
        <CardBody className = "page3">
          <br/>
          <CardTitle className = "page3_title">
          <Button className = "page3_btn"><i class="fas fa-external-link-alt"></i>&nbsp;바로가기</Button>
          친구 찾기
          
          </CardTitle>
          <br/>
          <CardText className = "page3_text">관심사가 유사한 친구를 추천받을 수 있습니다.</CardText>
          <CardText className = "page3_text"> 당신과 함께 프로젝트를 진행하고 싶다면,</CardText>
          <CardText className = "page3_text"> &nbsp;&nbsp;&nbsp;&nbsp;Loaf에서 친구를 찾아보세요.</CardText>
          
          <br/><br/>
        </CardBody>
      </Card>

      
      <Card>
        <CardBody className = "page4">
          <br/>
          <CardTitle className = "page4_title1"><i class="fas fa-tree"></i> VALUES</CardTitle>
          <CardText className = "page4_text1"> Sound Mind<br/>Sound Person<br/>Sound Teamwork</CardText>
          <CardTitle className = "page4_title2"><i class="fas fa-flag-checkered"></i> MISSION</CardTitle>
          <CardText className = "page4_text2"> 전 세계의 아마추어들을<br/>연결한다.<br/>
          원하는 모든 프로젝트를<br/>함께 한다.<br/>프로젝트를 통해<br/>성장한다.</CardText>
          <CardTitle className = "page4_title3"><i class="far fa-eye"></i> VISION</CardTitle>
          <CardText className = "page4_text3"> 아마추어들의<br/>경계없는<br/>성장공간</CardText> 
          <br/>
        </CardBody>
      </Card>
      
    </div>
    );
    
} 
export default Landing;