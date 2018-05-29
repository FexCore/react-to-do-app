import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem, setClearInput } from '../../redux/todo/actions';
import Form from './Form';

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addItem, setClearInput }, dispatch);
};

const mapStateToProps = state => {
	return {
    items: state.todo.items,
		clearInput: state.todo.clearInput
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
