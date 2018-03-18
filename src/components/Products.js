import React from "react";

const Product = props => {
	const { description, image, price, title } = props;
	return (
		<ul>
			<li>
				<h3>{title}</h3>
				<p>{description}</p>
				<img src={image} />
				<p>{price}</p>
			</li>
		</ul>
	);
};

class Products extends React.Component {

	state = {
		products: [{
			id: 1,
			image: '',
			description: 'gown',
			price: '89.99'
		},
		{
			id: 2,
			image: '',
			description: 'gown',
			price: '99.99'
		}]
	}

	render() {

		let allProducts = [...this.state.products];

		const sortedProducts = allProducts.map(x => {
			const { description, id, price } = x;
			return <Product
				description={description}
				id={id}
				image={`../../src/assets/images/${id}.jpeg`}
				key={id}
				price={price}
				title={description}
			/>

		})
		return (
			<div>
				<div className="product">
					<h3>hello from Products Components</h3>
				</div>
				<div className="product">
					{sortedProducts}
				</div>
			</div>
		);
	}
}

export default Products;
