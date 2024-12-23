import {IQualityUpdateStrategy} from "../interfaces/quality-update.strategy";
import {IItem} from "../../models/item";

export class SulfurasStrategy implements IQualityUpdateStrategy {
    updateQuality(item: IItem): void {
        // Sulfuras never changes
    }
}