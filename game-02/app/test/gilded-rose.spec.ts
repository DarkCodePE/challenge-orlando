import {GildedRoseService} from "../services/gilded-rose.service";
import {Item} from "../models/item"


describe('GildedRose', () => {
    // Standard Items
    it('should degrade quality and sellIn for standard items', () => {
        const items = [new Item('standard', 10, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(19);
        expect(items[0].sellIn).toBe(9);
    });

    it('should degrade quality twice as fast after sellIn date', () => {
        const items = [new Item('standard', 0, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(18);
    });

    // Aged Brie
    it('should increase quality for Aged Brie', () => {
        const items = [new Item('Aged Brie', 10, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(21);
    });

    it('should not increase quality beyond 50', () => {
        const items = [new Item('Aged Brie', 10, 50)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(50);
    });

    // Backstage Passes
    it('should increase quality by 2 when 10 days or less', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(22);
    });

    it('should increase quality by 3 when 5 days or less', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(23);
    });

    it('should drop quality to 0 after concert', () => {
        const items = [new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
    });

    // Sulfuras
    it('should never alter Sulfuras', () => {
        const items = [new Item('Sulfuras, Hand of Ragnaros', 10, 80)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(80);
        expect(items[0].sellIn).toBe(10);
    });

    // Conjured Items
    it('should degrade twice as fast for conjured items', () => {
        const items = [new Item('Conjured', 10, 20)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(18);
    });

    // Quality Boundaries
    it('should never make quality negative', () => {
        const items = [new Item('standard', 10, 0)];
        const gildedRose = new GildedRoseService(items);

        gildedRose.updateQuality();

        expect(items[0].quality).toBe(0);
    });
});