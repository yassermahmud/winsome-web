import React from 'react';
import { object, arrayOf } from 'prop-types';

// import { Link } from 'react-router-dom'; ###########
import ResponsiveNavbar from './ResponsiveNavbar';

class ResponsiveNav extends React.Component {
	constructor() {
		super();
		this.state = {
			invisibleClass: '',
			addingCross: ''
		};
		this.visible = this.visible.bind(this);
	}
	visible() {
		if (!this.state.invisibleClass) {
			this.setState({
				invisibleClass: 'new-responsive-class',
				addingCross: 'is-active'
			});
		} else {
			this.setState({
				invisibleClass: '',
				addingCross: ''
			});
		}
	}
	render() {
		const { data } = this.props;
		// console.log(this.state.addingCross);
		// console.log(data);
		return (
			<div className="responsive-header">
				<img
					className="header-logo"
					src="./images/logo.png"
					alt="header logo is not available"
				/>
				{
				// <div
				// 	className={`responsive-nav ${this.state.addingCross}`}
				// 	onClick={this.visible}
				// 	onKeyPress={this.visible}
				// 	role="button"
				// 	tabIndex="0"
				// >
				// 	<div className="responsive-nav-lines" />
				// </div>
				}
				<div
					className="responsive-nav"
					onClick={this.visible}
					onKeyPress={this.visible}
					role="button"
					tabIndex="0"
				>
					<div className={`hamburger hamburger--elastic ${this.state.addingCross}`}>
					  <div className="hamburger-box">
					    <div className="hamburger-inner" />
					  </div>
					</div>
				</div>
				<ResponsiveNavbar
					data={data}
					newClass={this.state.invisibleClass}
					myFunc={this.visible}
				/>
			</div>
		);
	}
}
ResponsiveNav.propTypes = {
	data: arrayOf(object.isRequired).isRequired
};

export default ResponsiveNav;
