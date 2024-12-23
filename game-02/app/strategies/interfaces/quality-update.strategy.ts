import {IItem} from "../../models/item";


/**
 * Interface defining how item quality should be updated
 */
export interface IQualityUpdateStrategy {
    updateQuality(item: IItem): void;
}