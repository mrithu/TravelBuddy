// interface Traveller {
//     id: number;
//     name: string;
//     gender: 'male' | 'female';
//     language: string;
//     age: number;
//     partner?: number;
//     isEngaged: boolean;
//     preferences?: number[];
//   }
  
//   export function generatePreferences(travellers: Traveller[]): void {
//     travellers.forEach((traveller) => {
//       const preferences: number[] = [];
//       // Sort travellers by priority: gender, age, language
//       const sortedTravellers = travellers.sort((a, b) => {
//         if (a.gender !== b.gender) {
//           return a.gender === 'female' ? -1 : 1;
//         } else if (a.age !== b.age) {
//           return a.age - b.age;
//         } else {
//           return a.language.localeCompare(b.language);
//         }
//       });
  
//       sortedTravellers.forEach((other) => {
//         if (other.id !== traveller.id) {
//           preferences.push(other.id);
//         }
//       });
  
//       traveller.preferences = preferences;
//       traveller.isEngaged = false;
//     });
//   }
  

//   export function stableMarriage(travellers: Traveller[]): void {
//     while (travellers.some((traveller) => !traveller.isEngaged)) {
//       const traveller = travellers.find((traveller) => !traveller.isEngaged);
//       const partnerId = traveller?.preferences?.shift()!;
//       const partner = travellers.find((other) => other.id === partnerId);
  
//       if (partner && !partner.isEngaged && traveller && !traveller.isEngaged) { // Add type guard to check if partner is defined
//         engage(traveller, partner);
//       } else if (partner && traveller) { // Add type guard to check if partner is defined
//         const currentPartner = travellers.find((other) => other.id === partner.partner);
//         if (currentPartner && isPrefersNewPartner(partner, traveller, currentPartner)) { // Add type guard to check if currentPartner is defined
//           engage(traveller, partner);
//           currentPartner.isEngaged = false;
//         }
//       }
//     }
//   }
  
  
//   function engage(traveller1: Traveller, traveller2: Traveller): void {
//     if(!traveller1 || !traveller2){
//         return;
//     }
//     traveller1.isEngaged = true;
//     traveller1.partner = traveller2.id;
//     traveller2.isEngaged = true;
//     traveller2.partner = traveller1.id;
//   }
  
//   function isPrefersNewPartner(traveller: Traveller, newPartner: Traveller, currentPartner: Traveller): boolean {
//     if(traveller && traveller.preferences){
//         return traveller.preferences.indexOf(newPartner.id) < traveller.preferences.indexOf(currentPartner.id);
//     }
//     return false;
//   }
  