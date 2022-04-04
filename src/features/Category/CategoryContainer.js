import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './CatagoryContainer.css';
import DrawerComponent from '../../components/Drawer/DrawerComponent';

const columns = [
	{ field: 'albumId', headerName: 'ID', headerAlign: 'center' },
	{ field: 'title', headerName: 'Name', headerAlign: 'center', width: 300 },
	{ field: 'url', headerName: 'Slug', headerAlign: 'center', width: 350 },
	{ field: 'thumbnailUrl', headerName: 'Image', headerAlign: 'center', width: 300 },
];

const CategoryContainer = () => {
	const [tableData, setTableData] = useState([]);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((data) => data.json())
			.then((data) => setTableData(data));
	}, []);

	console.log(tableData);

	return (
		<div style={{ maxHeight: 450, width: '1235px' }}>
			<h1 className="names">
				Catagory
				<DrawerComponent />
			</h1>
			<DataGrid className="data container" rows={tableData} columns={columns} pageSize={12} />
		</div>
	);
};

export default CategoryContainer;
