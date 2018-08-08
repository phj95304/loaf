import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as projectAction } from '../../redux/modules/projects';

const mapStateToProps = (state, ownProps) => {//feed, projectId스테이트를 가져옴
    const { projects: { feed, projectId } } = state;
    return {
        feed, projectId
    }
}


const mapDispatchToProps = ( dispatch, ownProps ) => {//정의한 api를 사용한다.
    return {
        getFeed: () => {
            dispatch(projectAction.getFeed());
        },
        getProject: () => {
            dispatch(projectAction.getProject());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);