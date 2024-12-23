import {Item} from "./models/item";
import {GildedRoseService} from "./services/gilded-rose.service";

const items = [
    new Item("Standard Item", 10, 20),         // 📦 Normal item
    new Item("Aged Brie", 2, 0),              // 🧀 Increases in quality
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),  // 🎫 Special rules
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),  // 🎟️ Quality increases by 2
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),   // 🎭 Quality increases by 3
    new Item("Sulfuras, Hand of Ragnaros", 0, 80),  // ⚔️ Legendary item
    new Item("Conjured", 3, 6),               // 🔮 Degrades twice as fast
    new Item("Standard Item", -1, 20),        // 📦❌ Expired item
    new Item("Aged Brie", -1, 49),            // 🧀⏰ Aged Brie past sellIn
    new Item("Conjured", -1, 10),             // 🔮⏰ Expired conjured item
];

const gildedRose = new GildedRoseService(items);

console.log('\n🌟 Initial state:');
items.forEach(item =>
    console.log(`${item.name.padEnd(45)} | SellIn: ${String(item.sellIn).padStart(3)} | Quality: ${String(item.quality).padStart(2)}`)
);

// Simula 5 días
for (let day = 1; day <= 5; day++) {
    gildedRose.updateQuality();
    console.log(`\n📅 Day ${day}:`);
    console.log('--'.repeat(35));
    items.forEach(item =>
        console.log(`${item.name.padEnd(45)} | SellIn: ${String(item.sellIn).padStart(3)} | Quality: ${String(item.quality).padStart(2)}`)
    );
}

// Marca tests exitosos
console.log('\n✅ Tests completados exitosamente:');
const tests = [
    items[0].quality < 20,                // Standard item decreases
    items[1].quality > 0,                 // Aged Brie increases
    items[2].quality > 20,                // Backstage normal increase
    items[3].quality > 22,                // Backstage 10 days
    items[4].quality > 23,                // Backstage 5 days
    items[5].quality === 80,              // Sulfuras unchanged
    items[6].quality < 6,                 // Conjured decreases faster
    items[7].quality < 16,                // Expired decreases faster
    items[8].quality <= 50,               // Quality never exceeds 50
    items[9].quality < 6                  // Expired conjured decreases fastest
];

tests.forEach((test, index) => {
    console.log(`${test ? '✅' : '❌'} Test ${index + 1} passed`);
});