import data from '/data.js'

const { fighters, weapons } = data

console.log("🔥 TORNEO BOOLKAICHI INIZIATO! 🔥\n");

// FASE 1: SCELTA DELL'ARMA
console.log("=== FASE 1: 🗡️ SCELTA DELL'ARMA ===");

// Creo una copia degli array per non modificare gli originali
const fightersWithWeapons = [...fighters];
const availableWeapons = [...weapons];

// Ogni combattente sceglie un'arma casualmente
fightersWithWeapons.forEach((fighter, index) => {
    // Genero un indice casuale per scegliere l'arma
    const randomWeaponIndex = Math.floor(Math.random() * availableWeapons.length);
    // Rimuovo l'arma scelta dalla lista disponibili usando splice
    const chosenWeapon = availableWeapons.splice(randomWeaponIndex, 1)[0];
    // Aggiungo l'arma al combattente
    fighter.weapon = chosenWeapon;
    console.log(`${fighter.name} ha scelto: ${chosenWeapon.name} (potenza +${chosenWeapon.power})`);
});
