import { IItem } from '../models/item';
import {IQualityUpdateStrategy} from "../strategies/interfaces/quality-update.strategy";
import {AgedBrieStrategy} from "../strategies/implement/aged-brie.strategy";
import {BackstagePassStrategy} from "../strategies/implement/backstage-pass.strategy";
import {SulfurasStrategy} from "../strategies/implement/sulfuras.strategy";
import {ConjuredItemStrategy} from "../strategies/implement/conjured-item.strategy";
import {StandardItemStrategy} from "../strategies/implement/standard-item.strategy";

export class GildedRoseService {
    private strategies: Map<string, IQualityUpdateStrategy> | undefined;

    constructor(public items: Array<IItem>) {
        this.initializeStrategies();
    }

    /**
     * Initialize the strategy map with all available strategies
     */
    private initializeStrategies(): void {
        this.strategies = new Map([
            ['Aged Brie', new AgedBrieStrategy()],
            ['Backstage passes to a TAFKAL80ETC concert', new BackstagePassStrategy()],
            ['Sulfuras, Hand of Ragnaros', new SulfurasStrategy()],
            ['Conjured', new ConjuredItemStrategy()]
        ]);
    }

    /**
     * Updates the quality of all items in inventory
     */
    updateQuality(): Array<IItem> {
        for (const item of this.items) {
            const strategy = this.getStrategyForItem(item);
            strategy.updateQuality(item);

            // Quality cap check
            if (item.name !== 'Sulfuras, Hand of Ragnaros' && item.quality > 50) {
                item.quality = 50;
            }
        }
        return this.items;
    }

    /**
     * Gets the appropriate strategy for a given item
     */
    private getStrategyForItem(item: IItem): IQualityUpdateStrategy {
        // @ts-ignore
        return this.strategies.get(item.name) ?? new StandardItemStrategy();
    }
}