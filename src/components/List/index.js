import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem } from '../../redux/todo/actions';
import List from './List';

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ removeItem }, dispatch);
};

const mapStateToProps = state => {
  return {
    items: state.todo.items
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);