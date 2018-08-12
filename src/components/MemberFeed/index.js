import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userAction } from '../../redux/modules/users';

const mapStateToProps = (state, ownProps) => {
    const { users: { feed } } = state;
    return {
        feed
    }
}


const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        getUserFeed: () => {
            dispatch(userAction.getUserFeed());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Container);