'use client';
import React, { useEffect, useState } from 'react';
import ProfitCalculator from './Profitcalc';
import TireCalculator from './Tirecalc';

function Calculator({ t, locale, slug }) {
    useEffect(() => {
        const isAuthenticated = sessionStorage.getItem('authenticated');
        if (isAuthenticated !== 'true') {
            window.location.href = `/${locale}/login`;
        }
    }, [locale]);

    const [selectedCalculator, setSelectedCalculator] = useState('profit');

    return (
        <div className='h-[100vh] flex flex-col items-center justify-center'>
            <nav>
                <div className='flex items-center'>
                    <button className="mr-4 text-[16px]" onClick={() => setSelectedCalculator('profit')}>
                        Calculatrice de Profit
                    </button>
                    <p className="mx-2 text-[16px]">/</p>
                    <button className="ml-4 text-[16px]" onClick={() => setSelectedCalculator('tire')}>
                        Calculatrice de Pneu
                    </button>
                </div>
            </nav>
            <div>
                {selectedCalculator === 'profit' ? (
                    <ProfitCalculator key="profit" />
                ) : (
                    <TireCalculator key="tire" />
                )}
            </div>
        </div>
    );
}

export default Calculator;





// 'use client'
// import React from 'react';

// const Calculator = ({ t, locale, slug }) => {
//   const [cost, setCost] = useState(0);
//     const [costOption, setCostOption] = useState("checkCost");
//     const [result, setResult] = useState("");
  
//     const handleCostChange = (e) => {
//       setCost(parseFloat(e.target.value));
//     };
  
//     const handleOptionChange = (e) => {
//       setCostOption(e.target.value);
//     };
  
//     const roundToNearestFive = (num) => {
//       if (num === 0.6289) {
//         return num;
//       } else {
//         return Math.round(num / 5) * 5;
//       }
//     };
  
//     const roundToNearest = (num) => {
//       const remainder = num % (num < 100 ? 5 : 25);
//       if (remainder < (num < 100 ? 3 : 13)) {
//         return Math.floor(num / (num < 100 ? 5 : 25)) * (num < 100 ? 5 : 25);
//       } else {
//         return Math.ceil(num / (num < 100 ? 5 : 25)) * (num < 100 ? 5 : 25);
//       }
//     };
  
//     const processDecimal = (decimal) => {
//       return Math.abs(Math.round((decimal * 100) - 100));
//     };
  
//     const calculateTotal = () => {
//       // Set the profit percentages based on the cost
//       let profitPercentages;
//       if (cost <= 29) {
//         profitPercentages = [0.5];
//       } else if (cost >= 30 && cost <= 74) {
//         profitPercentages = [0.55];
//       } else if (cost >= 75 && cost <= 99) {
//         profitPercentages = [0.6];
//       } else if (cost >= 101 && cost <= 249) {
//         profitPercentages = [0.6];
//       } else if (cost >= 250 && cost <= 999) {
//         profitPercentages = [0.65];
//       } else if (cost >= 1000 && cost <= 2099) {
//         profitPercentages = [0.7];
//       } else if (cost >= 2100 && cost <= 2999) {
//         profitPercentages = [0.725];
//       } else if (cost >= 3000 && cost <= 3999) {
//         profitPercentages = [0.75];
//       } else if (cost >= 4000) {
//         profitPercentages = [0.775];
//       } else {
//         profitPercentages = [0.6289];
//       }
  
//       let resultText = "";
//       for (let i = 0; i < profitPercentages.length; i++) {
//         let profit = cost / profitPercentages[i];
//         let total = parseFloat(profit);
  
//         let addedCost = 0;
//         if (costOption === "add25") {
//           addedCost = roundToNearestFive(total.toFixed(2)) / 0.75 - total;
//         } else {
//           addedCost = roundToNearestFive(total.toFixed(2)) / 0.75 - total;
//           if (addedCost < 250) {
//             addedCost = 250;
//           }
//         }
  
//         let warrantiePrice = addedCost;
//         let finalTotal = roundToNearestFive(total.toFixed(2)) + roundToNearest(parseFloat(warrantiePrice));
  
//         resultText += `Totale avec ${processDecimal(profitPercentages[i])}% profit: $${roundToNearestFive(total.toFixed(2))}<br>` +
//           `La garantie de 25 % coûtera: ${roundToNearest(warrantiePrice.toFixed(2))}$<br>` +
//           `Le prix total avec garantie: ${finalTotal.toFixed(2)}`;
//       }
//       setResult(resultText);
//     };
  
//     const handleKeyUp = (event) => {
//       if (event.key === 'Enter') {
//         calculateTotal();
//       }
//     };

//     return (
//       <div>
//         <div id="calculator">
//           <legend>CHOISIR UNE OPTION</legend>
//           <div>
//             <input
//               type="radio"
//               id="checkCostOption"
//               name="costOption"
//               value="checkCost"
//               className="colorButton"
//               checked={costOption === "checkCost"}
//               onChange={handleOptionChange}
//             />
//             <label>Pièce Majeure</label>
//           </div>
//           <div id="radio-two">
//             <input
//               type="radio"
//               id="addCostOption"
//               name="costOption"
//               value="add25"
//               className="colorButton"
//               checked={costOption === "add25"}
//               onChange={handleOptionChange}
//             />
//             <label>Autre</label>
//           </div>
//           <label htmlFor="cost">SAISIR LE COÛT:</label>
//           <input
//             type="number"
//             id="cost"
//             className="input-box"
//             step="0.01"
//             value={cost}
//             onChange={handleCostChange}
//             onKeyUp={handleKeyUp}
//           />
//           <button onClick={calculateTotal} id="my-button" className="round-button">Calculer le Total</button>
//           <div id="result" dangerouslySetInnerHTML={{ __html: result }} />
//         </div>
//       </div>
//     );
//   };

// export default Calculator;







