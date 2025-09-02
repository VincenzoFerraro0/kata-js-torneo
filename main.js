import data from '/data.js'

const { fighters, weapons } = data

console.log("🔥 TORNEO BOOLKAICHI INIZIATO! 🔥");

console.log("\n");

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

console.log("\n");

// FASE 2: ALLENAMENTO
console.log("=== FASE 2: 💪 ALLENAMENTO ===");

// Ogni combattente si allena e la sua potenza viene moltiplicata per un numero casuale tra 1 e 100
const trainedFighters = fightersWithWeapons.map(fighter => {
    const trainingMultiplier = Math.floor(Math.random() * 100) + 1;
    let newPower;
    
    // 50% di probabilità che l'allenamento funzioni
    if (Math.random() > 0.5) {
        newPower = Math.floor(fighter.power * trainingMultiplier);
        console.log(`${fighter.name}: ${fighter.power} → ${newPower} (x${trainingMultiplier}) ✅`);
    } else {
        newPower = fighter.power; // Mantiene la potenza originale
        console.log(`${fighter.name}: ${fighter.power} → ${newPower} (allenamento fallito) ❌`);
    }
    
    return {
        ...fighter,
        originalPower: fighter.power,
        power: newPower,
        trainingMultiplier: trainingMultiplier
    };
});

console.log("\n");

// FASE 3: QUALIFICAZIONI
console.log("=== FASE 3: 🎯 QUALIFICAZIONI ===");

// Escludiamo dal torneo chi non ha superato una potenza di almeno 2000
const qualificationFighters = trainedFighters.filter((fighter)=> fighter.power >= 2000)

console.log("Combattenti qualificati (potenza ≥ 2000):");
qualificationFighters.forEach(fighter => {
    console.log(`✅ ${fighter.name}: ${fighter.power}`);
});