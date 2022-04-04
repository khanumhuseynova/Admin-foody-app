import './ProductCart.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useRef, useState } from 'react';
import ModalDelete from '../../../components/ModalDelete/ModalDelete';
import pizzaBG from '../../../image/pizzaBG.png';

const ProductCartData = [
	{
		id: 1,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 2,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 3,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 4,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 5,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 6,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 7,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 8,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 9,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
	{
		id: 10,
		name: 'Marqarita',
		img: pizzaBG,
		restorant: 'Papa John’s',
		price: '$16',
		icon: <DeleteForeverIcon />,
	},
];

export default function ProductCart() {
	const [products, setProducts] = useState(ProductCartData);
	const [dialog, setDialog] = useState({
		isLoading: false,
	});
	const idProductRef = useRef();

	const handleDialog = (isLoading) => {
		setDialog({
			isLoading,
		});
	};

	const handleDelete = (id) => {
		handleDialog(true);
		idProductRef.current = id;
	};

	const areUserDelete = (choose) => {
		if (choose) {
			setProducts(products.filter((p) => p.id !== idProductRef.current));
			handleDialog(false);
		} else {
			handleDialog(false);
		}
	};

	return (
		<div className="productCardContainer">
			{products.map((p) => (
				<div className="productsCart">
					<div className="productsCartHover">
						<img src={p.img} alt={p.name} />
						<h2>{p.name}</h2>
						<h3>{p.restorant}</h3>
						<div className="buttonAction">
							<p>{p.price}</p>
							<button onClick={() => handleDelete(p.id)}>{p.icon}</button>
						</div>
					</div>
					{dialog.isLoading && <ModalDelete onDialog={areUserDelete} />}
				</div>
			))}
		</div>
	);
}
