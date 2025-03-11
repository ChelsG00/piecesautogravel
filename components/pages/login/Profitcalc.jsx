'use client'
import { useState } from 'react';


const ProfitCalculator = () => {
 const [cost, setCost] = useState('');
 const [result, setResult] = useState('');


 const handleKeyPress = (event) => {
   if (event.key === 'Enter') {
     calculateTotal();
   }
 };


 const calculateTotal = () => {
   let profitPercentages;
   if (cost <= 29) {
     profitPercentages = [0.5];
   } else if (cost >= 30 && cost <= 74) {
     profitPercentages = [0.55];
   } else if (cost >= 75 && cost <= 99) {
     profitPercentages = [0.6];
   } else if (cost >= 101 && cost <= 249) {
     profitPercentages = [0.6];
   } else if (cost >= 250 && cost <= 999) {
     profitPercentages = [0.65];
   } else if (cost >= 1000 && cost <= 2099) {
     profitPercentages = [0.7];
   } else if (cost >= 2100 && cost <= 2999) {
     profitPercentages = [0.725];
   } else if (cost >= 3000 && cost <= 3999) {
     profitPercentages = [0.75];
   } else if (cost >= 4000) {
     profitPercentages = [0.775];
   } else {
     profitPercentages = [0.6289];
   }


   const roundToNearestFive = (num) => {
     return num === 0.6289 ? num : Math.round(num / 5) * 5;
   };


   const roundToNearest = (num) => {
     const remainder = num % (num < 100 ? 5 : 25);
     return remainder < (num < 100 ? 3 : 13)
       ? Math.floor(num / (num < 100 ? 5 : 25)) * (num < 100 ? 5 : 25)
       : Math.ceil(num / (num < 100 ? 5 : 25)) * (num < 100 ? 5 : 25);
   };


   const processDecimal = (decimal) => {
     return Math.abs(Math.round(decimal * 100 - 100));
   };


   let finalResult = '';
   for (let i = 0; i < profitPercentages.length; i++) {
     let profit = cost / profitPercentages[i];
     let total = parseFloat(profit);


     const costOption = document.querySelector('input[name="costOption"]:checked')?.value;
     let addedCost = costOption === 'add25'
       ? roundToNearestFive(total.toFixed(2)) / 0.75 - total
       : roundToNearestFive(total.toFixed(2)) / 0.75 - total;


     if (addedCost < 250 && costOption !== 'add25') {
       addedCost = 250;
     }


     let warrantiePrice = addedCost;
     let finalTotal = roundToNearestFive(total.toFixed(2)) + roundToNearest(parseFloat(warrantiePrice));


     finalResult += `Totale avec profit: $${roundToNearestFive(total.toFixed(2))}<br>` +
       `La garantie de 25 % coûtera: ${roundToNearest(warrantiePrice.toFixed(2))}$<br>` +
       `Le prix total avec garantie: ${finalTotal.toFixed(2)}`;
   }
   setResult(finalResult);
 };


 return (
   <div onKeyUp={handleKeyPress}>
     <div>
       <div id="calculator" className='mt-16'>
         <legend className='text-[16px]'>CHOISIR UNE OPTION</legend>


         <div className='mt-3 mb-3'>
           <input type="radio" id="checkCostOption" name="costOption" value="checkCost" />
           <label className='ml-5 text-[16px]'>Pièce Majeure</label>
         </div>


         <div id="radio-two" className='mb-6'>
           <input type="radio" id="addCostOption" name="costOption" value="add25" />
           <label className='ml-5 text-[16px]'>Autre</label>
         </div>


         <label htmlFor="cost" className='text-[16px]'>SAISIR LE COÛT:</label>
         <input
           type="number"
           id="cost"
           step="0.01"
           className='border-black border-[1px] py-2 pr-36 pl-2 text-[16px] block mt-2 mb-4 rounded'
           value={cost}
           onChange={(e) => setCost(e.target.value)}
         />


         <button onClick={calculateTotal} id="my-button" className='py-2 px-8 bg-[rgb(13,92,177)] rounded-sm block mt-8 text-white text-[16px]'>
           Calculer le Total
         </button>


         <div id="result" className='text-[16px] pt-5' dangerouslySetInnerHTML={{ __html: result }} />
       </div>
       </div>
   </div>
 );
};


export default ProfitCalculator;
