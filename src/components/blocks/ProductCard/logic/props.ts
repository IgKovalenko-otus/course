import {IProductCardRatingProps} from "blocks/ProductCard/Rating/logic/props";

export interface IUiProductCardProps {
  productId: number
  title?: string
  price?: number
  description?: string
  image?: string
  rating?: IProductCardRatingProps
  searchText?: string
}
