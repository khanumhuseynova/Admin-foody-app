import React from 'react';
import './ProductHeader.css';
import DrawerComponent from '../../../components/Drawer/DrawerComponent';

const ProductHeader = () => {
	return (
		<h2 className="names">
			Product
			<DrawerComponent />
		</h2>
	);
};

export default ProductHeader;
