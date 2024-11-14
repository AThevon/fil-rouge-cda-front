// types.ts
export type Image = {
	url: string;
};

export type Category = {
	id: number;
	name: string;
	images: Image[];
};

export type Product = {
	id: number;
	name: string;
	description: string;
	price: string;
	stock: number;
	vote_count: number;
	category: Category;
	images: Image[];
};