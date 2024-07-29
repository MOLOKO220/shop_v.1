export interface ProductInterfaces {
  _id: string;
  title: string;
  count_product: number;
  category: string;
  country: string;
  characteristics: [string, string][];
  price: {
    value: number;
    discount: boolean;
    old_price?: number | null;
    discount_percentage?: number | null;
  };
  reviews: [string, string];
  rating: {
    value: number;
    countReviews: number;
  };
  main_img: string;
  img: string[];
  new_product: boolean;
}
