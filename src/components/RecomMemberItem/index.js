import React from 'react';
import './styles.css';
import { Card} from 'reactstrap';
import img3 from '../../img/raw_img.jpg'
import { StickyContainer, Sticky } from 'react-sticky';

const RecomMemberItem = props => {
    return (
    <div className = "recom_memberitem_container">
    <br/>
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
                <div/>
                <div>
                    <p className = "recom_tag"> #Java </p>
                </div>

                <div>
                    <p className = "recom_tag"> #html5 </p>
                </div>

                <div>
                    <p className = "recom_tag"> #React </p>
                </div>
            </div>
        </Card>
    
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
                <div/>
                <div>
                    <p className = "recom_tag"> #Java </p>
                </div>

                <div>
                    <p className = "recom_tag"> #html5 </p>
                </div>

                <div>
                    <p className = "recom_tag"> #React </p>
                </div>
            </div>
        </Card>
        
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
                <div/>
                <div>
                    <p className = "recom_tag"> #Java </p>
                </div>

                <div>
                    <p className = "recom_tag"> #html5 </p>
                </div>

                <div>
                    <p className = "recom_tag"> #React </p>
                </div>
            </div>
        </Card>
        <br/>
    </div>
    );
}
export default RecomMemberItem;