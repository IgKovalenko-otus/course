import type {
    FontWeight,
    TextAlign,
    Size,
} from 'src/constants';

export interface IUiTextProps {
    text?: string
    size?: Size
    align?: TextAlign
    weight?: FontWeight
    uppercase?: boolean
    noWrap?: boolean
    noLineHeight?: boolean
}
