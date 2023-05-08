// 'use client';

// import { generatePreferences, stableMarriage } from "@/lib/helper";


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

  
//     // Example usage
//     const travellers: Traveller[] = [
//         { id: 1, name: 'John', gender: 'male', language: 'English', age: 25, isEngaged: false },
//         { id: 2, name: 'Alice', gender: 'female', language: 'English', age: 23, isEngaged: false },
//         { id: 3, name: 'Tom', gender: 'male', language: 'French', age: 28, isEngaged: false },
//         { id: 4, name: 'Eve', gender: 'female', language: 'French', age: 26, isEngaged: false },
//         { id: 5, name: 'Mike', gender: 'male', language: 'Spanish', age: 30, isEngaged: false },
//         { id: 6, name: 'Cathy', gender: 'female', language: 'Spanish', age: 27, isEngaged: false },
//       ];
      
//       generatePreferences(travellers);
//       stableMarriage(travellers);
      
//       console.log('Engagements:');
//       travellers.forEach((traveller) => {
//         console.log(`${traveller.name} engaged to ${travellers.find((other) => other.id === traveller.partner)?.name}`);
//       });
