import { IItem } from '../../models/item';
import { IQualityUpdateStrategy } from '../interfaces/quality-update.strategy';

export class StandardItemStrategy implements IQualityUpdateStrategy {
    updateQuality(item: IItem): void {
        if (item.quality > 0) {
            item.quality--;
        }
        item.sellIn--;

        if (item.sellIn < 0 && item.quality > 0) {
            item.quality--;
        }
    }
}