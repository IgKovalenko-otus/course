import {IProductCardRatingProps} from "blocks/ProductCard/Rating/logic/types";

export interface IUiProductCardProps {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating?: IProductCardRatingProps
}
