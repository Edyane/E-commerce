import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Qty from "../components/Qty";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
	const { removeFromCart } = useContext(CartContext)
	return (
		<div className="flex gap-x-8">
			<Link to={`product/${item.id}`} className="w-[70px] h-[70px]">
				<img
					src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
					alt=""
				/>
			</Link>
			<div className="flex-1">
				{/* title and remove icon */}
				<div className="flex gap-x-4 mb-3">
					<Link to={`product/${item.id}`}>
						{item.attributes.title}
					</Link>
					<div onClick={() => removeFromCart(item.id)}className="cursor-pointer text-[24px] hover:text-accent translation-all">
						<IoClose />
					</div>
					{/* quantity */}
				</div>

				<div className="flex items-center gap-x-12">
					<div className="flex gap-x-4 mb-2">
						<Qty item={item} />						
					</div>
					<div className="text-accent text-xl">
						$ {item.attributes.price * item.amount}
					</div>
				</div>

				{/* price*/}
				<div className="text-accent">
					<span>$ {item.attributes.price} per piece</span>
				</div>
			</div>
		</div>
	);
};

export default CartItem;