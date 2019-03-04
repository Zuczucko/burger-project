import React, { Component } from 'react';
import Auux from '../../hoc/Auux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import {connect} from 'react-redux';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerClosedHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer};
		});
	}
	

	render () {
		return (
			<Auux>
				<Toolbar 
					isAuth={this.props.isAuthenticated}
					drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<SideDrawer  
					isAuth={this.props.isAuthenticated}
					open={this.state.showSideDrawer} 
					closed={this.sideDrawerClosedHandler}/>
				<main className={classes.Content}>
					{this.props.children}
				</main>
			</Auux>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.auth.token !== null
	};
};

export default connect(mapStateToProps)(Layout);