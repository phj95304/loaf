import { connect } from 'react-redux';
import Container from './container';
import { actionCreators  as userActions } from '../../redux/modules/projects';

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        //!!!!!!!!!scoreProject:()
    }
}

export default connect(null, mapDispatchToProps)(Container);