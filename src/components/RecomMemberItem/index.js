import React from 'react';
import './styles.css';
import { Card} from 'reactstrap';
import img3 from '../../img/raw_img.jpg'

const RecomMemberItem = props => {
    return (
    <div>
        <Card className = "recom_member_card1">
            <div>
                <p className = "recom_member_intro1"> Member&nbsp;<i class="fas fa-bookmark"></i> </p>
            </div>
            <div>
                <img className = "recom_user_profile_img"
                    src = {img3}
                    alt = "hirrr"
                />
            </div>

            <div>
                <p className = "recom_member_intro2"> <i class="fab fa-slack"></i> 관련태그 </p>
            </div>

            <div className = "recom_hia">
                <div>
                    <p className = "recom_tag"> #JAVA </p>
                </div>

                <div>
                    <p className = "recom_tag"> #html5 </p>
                </div>

                <div>
                    <p className = "recom_tag"> #React.js </p>
                </div>
            </div>
        </Card>
    </div>
    );
}
export default RecomMemberItem;