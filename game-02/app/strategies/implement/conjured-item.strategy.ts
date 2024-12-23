import {IItem} from "../../models/item";
import {IQualityUpdateStrategy} from "../interfaces/quality-update.strategy";

export class ConjuredItemStrategy implements IQualityUpdateStrategy {
    updateQuality(item: IItem): void {
        if (item.quality > 0) {
            item.quality = Math.max(0, item.quality - 2);
        }
        item.sellIn--;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality = Math.max(0, item.quality - 2);
        }
    }
}