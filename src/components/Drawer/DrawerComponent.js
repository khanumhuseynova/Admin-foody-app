import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Form from 'react-bootstrap/Form';
import './Drawer.css';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Button from '../Button';
import { Grid } from '@mui/material';

const DrawerComponent = () => {
	const [openDrawer, setOpenDrawer] = useState(false);

	return (
		<>
			<Button className="addButton" onClick={() => setOpenDrawer(true)}>
				+ add product
			</Button>
			<Drawer role="presentation" anchor="right" onClose={() => setOpenDrawer(false)} open={openDrawer}>
				<form className="addDrawer">
					{/* Add Catagory */}
					<h1 className="headingAddCatagory">Add Catagory</h1>

					<Grid container>
						{/* Uploud Image */}
						<Grid item xs={5}>
							<p className="headingAddCat">Uploud Image</p>
						</Grid>

						<Grid item xs={5}>
							<div className="uploudImageButton">
								<label for="img" id="imgforUploud">
									<CloudUploadIcon style={{ fontSize: 50 }} />
								</label>
								<p className="littleUploud">uploud</p>
								<input type="file" id="img" name="img" accept="image/*" hidden></input>
							</div>
						</Grid>

						{/* Add your Category information */}
						<Grid item xs={5}>
							<p className="headingAddCat">Add your Category information</p>
						</Grid>

						<Grid item xs={5}>
							<div className="addInfoButton">
								<Form.Group className="mb-3" id="addInfoNS" controlId="formBasicName">
									<Form.Label className="headingFormNAme">Name</Form.Label>
									<br />
									<Form.Control id="addForm" type="text" placeholder="Soup" />
								</Form.Group>
								<Form.Group className="mb-3" id="addInfoNS" controlId="formBasicSlug">
									<Form.Label>Slug</Form.Label>
									<br />
									<Form.Control id="addForm" type="text" placeholder="Yummy Soup" />
								</Form.Group>
							</div>
						</Grid>
					</Grid>

					<hr class="new1" />
					<div className="formikButtons">
						<button id="buttonCancel" color="primary" variant="contained" fullWidth type="submit">
							Cancel
						</button>
						<button id="buttonCreate" color="primary" variant="contained" fullWidth type="submit">
							Create
						</button>
					</div>
					<br />
				</form>
			</Drawer>
		</>
	);
};

export default DrawerComponent;
