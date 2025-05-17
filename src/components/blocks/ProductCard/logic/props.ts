import {IProductCardRatingProps} from "blocks/ProductCard/Rating/logic/props";

export interface IUiProductCardProps {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating?: IProductCardRatingProps
}
