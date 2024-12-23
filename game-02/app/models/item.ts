/**
 * Interface defining the basic structure of an item
 */
export interface IItem {
    name: string;
    sellIn: number;
    quality: number;
}

/**
 * Base Item class implementing the IItem interface
 */
export class Item implements IItem {
    constructor(
        public name: string,
        public sellIn: number,
        public quality: number
    ) {}
}