import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TopicsComponent } from '.';
import * as actions from './topics-actions';

const mapStateToProps = state => ({
  topics: state,
});

const mapDispatchToProps = (dispatch) => {
  const { onTopicCreate } = bindActionCreators(actions, dispatch);
  return {
    onTopicCreate,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicsComponent);
