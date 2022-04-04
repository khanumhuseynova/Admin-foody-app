import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './OfferContainer.css';
import DrawerComponent from '../../components/Drawer/DrawerComponent';

const columns = [
	{ field: 'id', headerName: 'ID', headerAlign: 'center' },
	{ field: 'name', headerName: 'Title', headerAlign: 'center', width: 300 },
	{ field: 'body', headerName: 'Description', headerAlign: 'center', width: 450 },
	{ field: 'email', headerName: 'Image', headerAlign: 'center', width: 450 },
	{ field: 'title', headerName: 'Image', headerAlign: 'center', width: 350 },
];

const OfferContainer = () => {
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
				Offers
				<DrawerComponent />
			</h1>
			<DataGrid className="data  container" rows={tableData} columns={columns} pageSize={12} />
		</div>
	);
};

export default OfferContainer;
