'use client';

import React, { useState } from 'react';

function TireCalculator() {
  const [showInstallation, setShowInstallation] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleInstallationChange = (event) => {
    setShowInstallation(event.target.value === 'install');
  };

  const calculateTotal = () => {
    const productCost = parseFloat(document.getElementById('productCost').value);
    let price = productCost;

    const tireRadio = document.querySelector('input[name="tire"]:checked').value;
    if (tireRadio === 'oneTire') {
      price = (price * 1 / 0.8) + 4.5;
    } else if (tireRadio === 'fourTires') {
      price = (price * 4 / 0.8) + 18;
    }

    const additionalCostRadio = document.querySelector('input[name="nails"]:checked').value;
    if (additionalCostRadio === 'nails') {
      price += tireRadio === 'oneTire' ? 30 : 120;
    }

    const taxesRadio = document.querySelector('input[name="taxes"]:checked').value;
    if (taxesRadio === 'taxes') {
      price += price * 0.1498;
    }

    setTotalPrice(price.toFixed(2));
  };

  const calculateTotalInstall = () => {
    const productCostInstall = parseFloat(document.getElementById('costInstall').value);
    let priceInstall = productCostInstall;

    const tireRadioInstall = document.querySelector('input[name="tireInstall"]:checked').value;
    if (tireRadioInstall === 'oneTireInstall') {
      priceInstall = (priceInstall * 1 / 0.8) + 4.5;
    } else if (tireRadioInstall === 'fourTiresInstall') {
      priceInstall = (priceInstall * 4 / 0.8) + 18;
    }

    const additionalCostRadioInstall = document.querySelector('input[name="nailsInstall"]:checked').value;
    if (additionalCostRadioInstall === 'nailsInstall') {
      priceInstall += tireRadioInstall === 'oneTireInstall' ? 30 : 120;
    }

    const sizeTireInstall = document.querySelector('input[name="sizeInstall"]:checked').value;
    switch (sizeTireInstall) {
      case 'smallInstall':
        priceInstall += tireRadioInstall === 'oneTireInstall' ? 18 : 60;
        break;
      case 'mediumInstall':
        priceInstall += tireRadioInstall === 'oneTireInstall' ? 20 : 75;
        break;
      case 'largeInstall':
        priceInstall += tireRadioInstall === 'oneTireInstall' ? 25 : 100;
        break;
      case 'xlInstall':
        priceInstall += tireRadioInstall === 'oneTireInstall' ? 31.25 : 125;
        break;
    }

    priceInstall += priceInstall * 0.1498;

    setTotalPrice(priceInstall.toFixed(2));
  };

  return (
      <div>
        <div>
          <div id="installationChoice">
            <legend className='text-[16px] mb-2 mt-4'>CHOISIR UNE OPTION</legend>
            <div className='mb-2'>
              <input
                type="radio"
                id="toggleInstall"
                name="toggle"
                value="install"
                className="colorButton"
                onChange={handleInstallationChange}
              />
              <label className='text-[16px]'>Avec Installation *Taxes Incluses</label>
            </div>
            <div>
              <input
                type="radio"
                id="toggleNoInstall"
                name="toggle"
                value="noInstall"
                className="colorButton"
                onChange={handleInstallationChange}
              />
              <label className='text-[16px] '>Sans Installation</label>
            </div>
          </div>

          {!showInstallation && (
            <div id="toggleNoInstallation">
              <legend className='text-[16px] mb-2 mt-4'>CHOISIR UNE OPTION</legend>
              <div className='mb-2'>
                <input type="radio" id="noTaxes" name="taxes" value="noTaxes" className="colorButton" defaultChecked />
                <label className='text-[16px] mb-2'>Sans Taxes</label>
              </div>
              <div>
                <input type="radio" id="taxes" name="taxes" value="taxes" className="colorButton" />
                <label className='text-[16px] '>Avec Taxes</label>
              </div>
              <legend className='text-[16px] mb-2 mt-4'>CHOISIR UNE OPTION</legend>
              <div className='mb-2'>
                <input type="radio" id="noNails" name="nails" value="noNails" className="colorButton" defaultChecked />
                <label className='text-[16px]'>Non Clouter</label>
              </div>
              <div>
                <input type="radio" id="nails" name="nails" value="nails" className="colorButton" />
                <label className='text-[16px]'>Clouter</label>
              </div>
              <legend className='text-[16px] mb-2 mt-4'>CHOISIR UNE OPTION</legend>
              <div className='mb-2'>
                <input type="radio" id="fourTires" name="tire" value="fourTires" className="colorButton" defaultChecked />
                <label className='text-[16px]'>4</label>
              </div>
              <div className='mb-4'>
                <input type="radio" id="oneTire" name="tire" value="oneTire" className="colorButton" />
                <label className='text-[16px]'>1</label>
              </div>
              <label htmlFor="productCost" className='text-[16px]'>SAISIR LE COÛT:</label>
              <input type="number" id="productCost" className="border-black border-[1px] py-2 pr-36 pl-2 text-[16px] block mt-2 mb-4 rounded" step="0.01" />
              <button onClick={calculateTotal} id="buttonOne" className="py-2 px-8 bg-[rgb(13,92,177)] rounded-sm block mt-8 text-white text-[16px]">Calculer le Total</button>
              <div id="totalPrice" className='text-[16px]'>{totalPrice}</div>
            </div>
          )}

          {showInstallation && (
            <div id="toggleWithInstallation">
              <legend className='text-[16px]'>CHOISIR UNE OPTION</legend>
              <div>
                <input
                  type="radio"
                  id="noNailsInstall"
                  name="nailsInstall"
                  value="noNailsInstall"
                  className="colorButton"
                  defaultChecked
                />
                <label className='text-[16px]'>Non Clouter</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="nailsInstall"
                  name="nailsInstall"
                  value="nailsInstall"
                  className="colorButton"
                />
                <label className='text-[16px]'>Clouter</label>
              </div>
              <legend className='text-[16px]'>CHOISIR UNE OPTION</legend>
              <div>
                <input
                  type="radio"
                  id="fourTiresInstall"
                  name="tireInstall"
                  value="fourTiresInstall"
                  className="colorButton"
                  defaultChecked
                />
                <label className='text-[16px]'>4</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="oneTireInstall"
                  name="tireInstall"
                  value="oneTireInstall"
                  className="colorButton"
                />
                <label className='text-[16px]'>1</label>
              </div>
              <legend className='text-[16px]'>CHOISIR UNE OPTION</legend>
              <div>
                <input
                  type="radio"
                  id="smallInstall"
                  name="sizeInstall"
                  value="smallInstall"
                  className="colorButton"
                  defaultChecked
                />
                <label className='text-[16px]'>13-14-15</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="mediumInstall"
                  name="sizeInstall"
                  value="mediumInstall"
                  className="colorButton"
                />
                <label className='text-[16px]'>16-17-18</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="largeInstall"
                  name="sizeInstall"
                  value="largeInstall"
                  className="colorButton"
                />
                <label className='text-[16px]'>19-20</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="xlInstall"
                  name="sizeInstall"
                  value="xlInstall"
                  className="colorButton"
                />
                <label className='text-[16px]'>21+</label>
              </div>
              <label htmlFor="costInstall" className='text-[16px]'>SAISIR LE COÛT:</label>
              <input type="number" id="costInstall" className="border-black border-[1px] py-2 pr-36 pl-2 text-[16px] block mt-2 mb-4 rounded" step="0.01"  />
              <button onClick={calculateTotalInstall} id="buttonTwo" className="py-2 px-8 bg-[rgb(13,92,177)] rounded-sm block mt-8 text-white text-[16px]">Calculer le Total</button>
              <div id="totalPrice" className='text-[16px]'>Le Prix Totale : {totalPrice}</div>
            </div>
          )}
        </div>
      </div>
 
  );
}

export default TireCalculator;












// 'use client';

// import React, { useState } from 'react';

// function TireCalculator() {
//     const [showInstallation, setShowInstallation] = useState(false);

//     const toggleInstallation = (isInstall) => {
//         setShowInstallation(isInstall);
//     };

//     const calculateTotal = () => {
//         const productCost = parseFloat(document.getElementById('productCost').value);
//         let totalPrice = productCost;

//         const tireRadio = document.querySelector('input[name="tire"]:checked').value;
//         if (tireRadio === 'oneTire') {
//             totalPrice = (totalPrice * 1 / 0.8) + 4.5;
//         } else if (tireRadio === 'fourTires') {
//             totalPrice = (totalPrice * 4 / 0.8) + 18;
//         }

//         const additionalCostRadio = document.querySelector('input[name="nails"]:checked').value;
//         if (additionalCostRadio === 'nails') {
//             if (tireRadio === 'oneTire') {
//                 totalPrice += 30;
//             } else if (tireRadio === 'fourTires') {
//                 totalPrice += 120;
//             }
//         }

//         const taxesRadio = document.querySelector('input[name="taxes"]:checked').value;
//         if (taxesRadio === 'taxes') {
//             totalPrice += (totalPrice * 0.1498);
//         }

//         document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
//     };

//     const calculateTotalInstall = () => {
//         const productCostInstall = parseFloat(document.getElementById('costInstall').value);
//         let totalPriceInstall = productCostInstall;

//         const tireRadioInstall = document.querySelector('input[name="tireInstall"]:checked').value;
//         if (tireRadioInstall === 'oneTireInstall') {
//             totalPriceInstall = (totalPriceInstall * 1 / 0.8) + 4.5;
//         } else if (tireRadioInstall === 'fourTiresInstall') {
//             totalPriceInstall = (totalPriceInstall * 4 / 0.8) + 18;
//         }

//         const additionalCostRadioInstall = document.querySelector('input[name="nailsInstall"]:checked').value;
//         if (additionalCostRadioInstall === 'nailsInstall') {
//             totalPriceInstall += (tireRadioInstall === 'oneTireInstall' ? 30 : 120);
//         }

//         const sizeTireInstall = document.querySelector('input[name="sizeInstall"]:checked').value;
//         switch (sizeTireInstall) {
//             case 'smallInstall':
//                 totalPriceInstall += (tireRadioInstall === 'oneTireInstall') ? 18 : 60;
//                 break;
//             case 'mediumInstall':
//                 totalPriceInstall += (tireRadioInstall === 'oneTireInstall') ? 20 : 75;
//                 break;
//             case 'largeInstall':
//                 totalPriceInstall += (tireRadioInstall === 'oneTireInstall') ? 25 : 100;
//                 break;
//             case 'xlInstall':
//                 totalPriceInstall += (tireRadioInstall === 'oneTireInstall') ? 31.25 : 125;
//                 break;
//             default:
//                 break;
//         }

//         totalPriceInstall += totalPriceInstall * 0.1498;

//         document.getElementById('results').textContent = totalPriceInstall.toFixed(2);
//     };


//     return (
//         <div className='flex flex-col justify-center items-center'>
//             <h2>Tire Calculator</h2>

//             <div id="installation-toggle">
//                 <div>
//                     <input type="radio" id="toggleInstall" name="toggle" value="install" className="colorButton" onChange={() => toggleInstallation(true)} />
//                     <label>Avec Installation</label>
//                 </div>

//                 <div id="radio-two">
//                     <input type="radio" id="toggleNoInstall" name="toggle" value="noInstall" className="colorButton" onChange={() => toggleInstallation(false)} />
//                     <label>Sans Installation</label>
//                 </div>
//             </div>

//             {showInstallation ? (
//                 <div id="installation">
//                     <label htmlFor="costInstall">Enter Product Cost:</label>
//                     <input type="number" id="costInstall" className="input-box" step="0.01" />

//                     <legend>Quantity of Tires:</legend>
//                     <div>
//                         <input type="radio" id="oneTireInstall" name="tireInstall" value="oneTireInstall" className="colorButton" />
//                         <label>1 Tire</label>
//                     </div>
//                     <div id="radio-two">
//                         <input type="radio" id="fourTiresInstall" name="tireInstall" value="fourTiresInstall" className="colorButton" />
//                         <label>4 Tires</label>
//                     </div>

//                     <legend>Tire Size:</legend>
//                     <div>
//                         <input type="radio" id="smallInstall" name="sizeInstall" value="smallInstall" className="colorButton" />
//                         <label>Small</label>
//                     </div>
//                     <div id="radio-two">
//                         <input type="radio" id="mediumInstall" name="sizeInstall" value="mediumInstall" className="colorButton" />
//                         <label>Medium</label>
//                     </div>
//                     <div id="radio-two">
//                         <input type="radio" id="largeInstall" name="sizeInstall" value="largeInstall" className="colorButton" />
//                         <label>Large</label>
//                     </div>
//                     <div id="radio-two">
//                         <input type="radio" id="xlInstall" name="sizeInstall" value="xlInstall" className="colorButton" />
//                         <label>XL</label>
//                     </div>

//                     <legend>Add Additional Cost:</legend>
//                     <div>
//                         <input type="radio" id="nailsInstall" name="nailsInstall" value="nailsInstall" className="colorButton" />
//                         <label>Add Nails</label>
//                     </div>

//                     <button onClick={calculateTotalInstall} id="my-button" className="round-button">Calculate Total</button>
//                     <div id="results"></div>
//                 </div>
//             ) : (
//                 <div id="no-installation">
//                     <label htmlFor="productCost">Enter Product Cost:</label>
//                     <input type="number" id="productCost" className="input-box" step="0.01" />

//                     <legend>Quantity of Tires:</legend>
//                     <div>
//                         <input type="radio" id="oneTire" name="tire" value="oneTire" className="colorButton" />
//                         <label>1 Tire</label>
//                     </div>
//                     <div id="radio-two">
//                         <input type="radio" id="fourTires" name="tire" value="fourTires" className="colorButton" />
//                         <label>4 Tires</label>
//                     </div>

//                     <legend>Add Additional Cost:</legend>
//                     <div>
//                         <input type="radio" id="nails" name="nails" value="nails" className="colorButton" />
//                         <label>Add Nails</label>
//                     </div>

//                     <legend>Include Taxes:</legend>
//                     <div>
//                         <input type="radio" id="taxes" name="taxes" value="taxes" className="colorButton" />
//                         <label>Yes</label>
//                     </div>

//                     <button onClick={calculateTotal} id="my-button" className="round-button">Calculate Total</button>
//                     <div id="totalPrice"></div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default TireCalculator;



 {/* Your Tire Calculator UI goes here */}
 {/* <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
            <button onClick={calculateTotal}>Calculer le Total</button>
            <div>{result}</div> */}
