import {IQualityUpdateStrategy} from "../interfaces/quality-update.strategy";
import {IItem} from "../../models/item";

export class BackstagePassStrategy implements IQualityUpdateStrategy {
    updateQuality(item: IItem): void {
        if (item.quality < 50) {
            item.quality++;
            if (item.sellIn <= 10 && item.quality < 50) {
                item.quality++;
            }
            if (item.sellIn <= 5 && item.quality < 50) {
                item.quality++;
            }
        }

        item.sellIn--;

        if (item.sellIn < 0) {
            item.quality = 0;
        }
    }
}