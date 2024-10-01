import React from 'react'
import { getDictionary } from '../dictionaries';
import Aboutus from './aboutus';
import Applications from './application';
import Careers from './careers';
import Contactus from './contactus';
import Connection from './login';
import Mechanic from './mechanic';
import Newparts from './newparts';
import Usedparts from './usedparts';
import Vehicles from './vehicles';
import Calculator from '@/components/pages/login/Calculators'; // Ensure the path is correct based on your file structure

export const RenderPage = async ({ params }) => {
    const translation = await getDictionary(params.locale);

    const handlePinSubmit = () => {
        // Redirect to the protected page upon successful PIN submission
        window.location.href = `/${params.locale}/calculator`; // Redirect to the calculator page
    };

    switch (params.slug) {
        case "vehicules":
        case "vehicles":
            return <Vehicles t={translation} locale={params.locale} slug={params.slug} />;
        case "entreprise":
        case "about-us":
            return <Aboutus t={translation} locale={params.locale} slug={params.slug} />;
        case "pieces-usagees":
        case "used-parts":
            return <Usedparts t={translation} locale={params.locale} slug={params.slug} />;
        case "mecanique":
        case "mechanic":
            return <Mechanic t={translation} locale={params.locale} slug={params.slug} />;
        case "pieces-neuves":
        case "new-parts":
            return <Newparts t={translation} locale={params.locale} slug={params.slug} />;
        case "carrieres":
        case "careers":
            return <Careers t={translation} locale={params.locale} slug={params.slug} />;
        case "nous-joindre":
        case "contact-us":
            return <Contactus t={translation} locale={params.locale} slug={params.slug} />;
        case "application":
        case "applications":
            return <Applications t={translation} locale={params.locale} slug={params.slug} />;
        case "login":
        case "se-connecter":
            return <Connection t={translation} locale={params.locale} slug={params.slug} />;
        case "calculator":
            return <Calculator t={translation} locale={params.locale} slug={params.slug} />;
            default:
        return <div>Page not found</div>;
            }
        };

export default RenderPage;




// import Dashboard from '@/components/pages/calculator';
// import React from 'react'
// import { getDictionary } from '../dictionaries';
// import Aboutus from './aboutus';
// import Applications from './application';
// import Careers from './careers';
// import Contactus from './contactus';
// import Connection from './login';
// import Mechanic from './mechanic';
// import Newparts from './newparts';
// import Usedparts from './usedparts';
// import Vehicles from './vehicles';

// export const RenderPage = async ({params}) =>  {
//     const translation = await getDictionary(params.locale);

//     const handlePinSubmit = (pin) => {
//         // Redirect to the desired page upon successful PIN submission
//         window.location.href = `/${params.locale}/vehicles`; // Example redirection
//     };

//     switch (params.slug) {
//         case "vehicules":
//         case "vehicles":
//                 return <Vehicles t={translation} locale={params.locale} slug={params.slug}/>
//         case "entreprise":
//         case "about-us":
//             return <Aboutus t={translation} locale={params.locale} slug={params.slug}/>
//         case "pieces-usagees":
//         case "used-parts":
//                 return <Usedparts t={translation} locale={params.locale} slug={params.slug}/>    
//         case "mecanique":
//         case "mechanic":
//             return <Mechanic t={translation} locale={params.locale} slug={params.slug}/>
//         case "pieces-neuves":
//         case "new-parts":
//             return <Newparts t={translation} locale={params.locale} slug={params.slug}/>
//         case "carrieres":
//         case "careers":
//             return <Careers t={translation} locale={params.locale} slug={params.slug}/>
//         case "nous-joindre":
//         case "contact-us":
//             return <Contactus t={translation} locale={params.locale} slug={params.slug}/>
//         case "application": 
//         case "applications":
//             return < Applications t={translation} locale={params.locale} slug={params.slug} />
//         case "login":
//         case "se-connecter":
//             return < Connection onPinSubmit={handlePinSubmit} t={translation} locale={params.locale} slug={params.slug} />
//             default:
//                 return <div>Page not found</div>;
        
//       }
// }

// export default RenderPage;