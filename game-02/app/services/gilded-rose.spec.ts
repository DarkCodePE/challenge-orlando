import {GildedRoseService} from "./gilded-rose.service";
import {Item} from "../gilded-rose";

describe('GildedRose', () => {
    describe('Standard items', () => {
        it('should degrade quality by 1', () => {
            const items = [new Item('Standard', 10, 20)];
            const gildedRose = new GildedRoseService(items);

            gildedRose.updateQuality();

            expect(items[0].quality).toBe(19);
            expect(items[0].sellIn).toBe(9);
        });
    });

    describe('Aged Brie', () => {
        it('should increase quality over time', () => {
            const items = [new Item('Aged Brie', 10, 20)];
            const gildedRose = new GildedRoseService(items);

            gildedRose.updateQuality();

            expect(items[0].quality).toBe(21);
            expect(items[0].sellIn).toBe(9);
        });
    });

    // Add more test cases for other item types...
});