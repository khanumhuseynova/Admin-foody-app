import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './OrdersContainer.css';
import DrawerComponent from '../../components/Drawer/DrawerComponent';

const columns = [
	{ field: 'id', headerName: 'ID', headerAlign: 'center' },
	{ field: 'email', headerName: 'Customer ID', width: 350, headerAlign: 'center' },
	{ field: 'body', headerName: 'Time', width: 350, headerAlign: 'center' },
	{ field: 'name', headerName: 'Delivery Address', width: 350, headerAlign: 'center' },
];

const OrdersContainer = () => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/comments')
			.then((data) => data.json())
			.then((data) => setTableData(data));
	}, []);

	console.log(tableData);

	return (
		<div style={{ maxHeight: 450, width: '100%' }}>
			<h1 className="names">
				Orders
				<DrawerComponent />
			</h1>

			<DataGrid
				className="data container"
				rows={tableData}
				columns={columns}
				options={{
					headerStyle: { size: '80px' },
				}}
				pageSize={12}
			/>
		</div>
	);
};

export default OrdersContainer;
