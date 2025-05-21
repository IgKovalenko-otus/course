import {IProductCardRatingProps} from "blocks/ProductCard/Rating/logic/props";

export interface IUiProductCardProps {
  title?: string
  price?: number
  description?: string
  image?: string
  rating?: IProductCardRatingProps
}
