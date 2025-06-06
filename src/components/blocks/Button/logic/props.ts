import {IUiButtonProps} from "blocks/Button/base/logic/props";
import type {IUiTextProps} from "blocks/Text/logic/props";

export interface IColorUiButtonProps {
    isActive?: boolean
    buttonProps?: IUiButtonProps
    textProps?: IUiTextProps
}