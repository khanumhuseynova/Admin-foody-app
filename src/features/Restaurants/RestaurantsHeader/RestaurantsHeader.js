import React from 'react';
import Dropdown from '../../../components/Dropdown/Dropdown';
import './RestaurantsHeader.css';
import DrawerComponent from '../../../components/Drawer/DrawerComponent';

const RestaurantsHeader = () => {
	return (
		<h2 className="names">
			Restaurants
			<div className="restaurantsHeader__rightSide">
				<Dropdown />
				<DrawerComponent />
			</div>
		</h2>
	);
};

export default RestaurantsHeader;
