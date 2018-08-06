import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as projectActions } from '../../redux/modules/projects';


const mapStateToProps = (state, ownProps) => {
    const {projects : { feed }} = state;
    return {
        feed
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProject: () => dispatch(projectActions.getFeed()),//피드를 패치했다
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);