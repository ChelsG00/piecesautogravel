"use client";
import React, { useEffect, useState } from "react";
import ProfitCalculator from "./Profitcalc";
import TireCalculator from "./Tirecalc";

function Calculator({ t, locale, slug }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [selectedCalculator, setSelectedCalculator] = useState("profit");

    useEffect(() => {
        console.log("🟢 useEffect triggered in Calculator.js");
    
        const checkAuth = async () => {
            console.log("🔍 Checking authentication...");
    
            try {
                const response = await fetch("/api/check-auth", { credentials: "include" });
    
                console.log("Response status:", response.status);
                console.log("Response headers:", response.headers);
    
                if (!response.ok) {
                    console.log("❌ Server responded with an error:", response.status);
                    throw new Error("Failed to check authentication");
                }
    
                const data = await response.json();
                console.log("Auth check response:", data);
    
                if (data.authenticated) {
                    console.log("✅ User is authenticated.");
                    setIsAuthenticated(true);
                } else {
                    console.log("❌ User is not authenticated.");
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.log("❌ Auth check failed. Error:", error);
                setIsAuthenticated(false);
            }
        };
    
        checkAuth();
    }, [locale]);
    
    useEffect(() => {
        console.log("🟢 Checking authentication...");
        
        const checkAuth = async () => {
            try {
                const response = await fetch("/api/check-auth", { credentials: "include" });
    
                console.log("Response status:", response.status);
                console.log("Response headers:", response.headers);
    
                if (!response.ok) {
                    console.log("❌ Server responded with an error:", response.status);
                    throw new Error("Failed to check authentication");
                }
    
                const data = await response.json();
                console.log("Auth check response:", data);
    
                if (data.authenticated) {
                    console.log("✅ User is authenticated.");
                    setIsAuthenticated(true);
                } else {
                    console.log("❌ User is not authenticated.");
                    setIsAuthenticated(false);
                }
            } catch (error) {
                console.log("❌ Auth check failed. Error:", error);
                setIsAuthenticated(false);
            }
        };
    
        checkAuth();
    }, [locale]);
    
    

    // 🔥 Separate useEffect for redirection AFTER state update
    useEffect(() => {
        if (isAuthenticated === false) {
            const storedLocale = sessionStorage.getItem("userLocale") || "fr";
            console.log("🚀 Redirecting to login with locale:", storedLocale);
    
            window.location.href = `/${storedLocale}/login`;
        }
    }, [isAuthenticated]);

    if (isAuthenticated === null) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="h-[100vh] flex flex-col items-center mt-[170px]">
            <nav>
                <div className="flex items-center">
                    <button className="mr-4 text-[16px]" onClick={() => setSelectedCalculator("profit")}>
                        Calculatrice de Profit
                    </button>
                    <p className="mx-2 text-[16px]">/</p>
                    <button className="ml-4 text-[16px]" onClick={() => setSelectedCalculator("tire")}>
                        Calculatrice de Pneu
                    </button>
                </div>
            </nav>
            <div>
                {selectedCalculator === "profit" ? <ProfitCalculator key="profit" /> : <TireCalculator key="tire" />}
            </div>
        </div>
    );
}

export default Calculator;






// "use client";
// import React, { useEffect, useState } from "react";
// import ProfitCalculator from "./Profitcalc";
// import TireCalculator from "./Tirecalc";

// function Calculator ({ t, locale }) {
//     const [isAuthenticated, setIsAuthenticated] = useState(null); // Start as null to prevent flash of unauthenticated state

//     // useEffect(() => {
//     //     const checkAuth = async () => {
//     //         try {
//     //             const response = await fetch("/api/check-auth", { credentials: "include" }); // Ensure cookies are included
//     //             const data = await response.json();

//     //             if (data.authenticated) {
//     //                 setIsAuthenticated(true);
//     //             } else {
//     //                 window.location.href = `/${locale}/login`;
//     //             }
//     //         } catch {
//     //             window.location.href = `/${locale}/login`;
//     //         }
//     //     };

//     //     checkAuth();
//     // }, [locale]);

//     useEffect(() => {
//         const checkAuth = async () => {
//             try {
//                 console.log("Checking authentication...");
//                 const response = await fetch("/api/check-auth");
//                 const data = await response.json();
//                 console.log("Auth check response:", data);
    
//                 if (data.authenticated) {
//                     console.log("User is authenticated.");
//                     setIsAuthenticated(true);
//                 } else {
//                     console.log("User is not authenticated. Redirecting to login page.");
//                     const currentLocale = locale || 'fr';
//                     window.location.href = `/${currentLocale}/login`;
//                 }
//             } catch (error) {
//                 console.log("Auth check failed. Redirecting to login. Error:", error);
//                 const currentLocale = locale || 'fr';
//                 window.location.href = `/${currentLocale}/login`;
//             }
//         };
//         checkAuth();
//     }, [locale]);

//     if (isAuthenticated === null) return null; // Prevent flicker before authentication is determined

//     return (
//         <div className='h-[100vh] flex flex-col items-center mt-[170px]'>
//             <nav>
//                 <div className='flex items-center'>
//                     <button className="mr-4 text-[16px]" onClick={() => setSelectedCalculator("profit")}>
//                         Calculatrice de Profit
//                     </button>
//                     <p className="mx-2 text-[16px]">/</p>
//                     <button className="ml-4 text-[16px]" onClick={() => setSelectedCalculator("tire")}>
//                         Calculatrice de Pneu
//                     </button>
//                 </div>
//             </nav>
//             <div>
//                 {selectedCalculator === "profit" ? <ProfitCalculator key="profit" /> : <TireCalculator key="tire" />}
//             </div>
//         </div>
//     );
// }

// export default Calculator;

