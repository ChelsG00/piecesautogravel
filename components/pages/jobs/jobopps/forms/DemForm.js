'use client';

import React, { useState } from 'react';

const DemForm = ({ t }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    employmentDate: '',
    cv: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = 'First name is required';
    if (!formData.lastName) errors.lastName = 'Last name is required';
    if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.employmentDate) errors.employmentDate = 'Employment date is required';
    if (!formData.cv) errors.cv = 'CV is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('employmentDate', formData.employmentDate);
      formDataToSend.append('cv', formData.cv);

      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          body: formDataToSend,
        });

        if (res.status === 200) {
          setSuccessMessage('Email sent successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            employmentDate: '',
            cv: null,
          });
          setErrors({});
        } else {
          const result = await res.json();
          setErrors({ form: result.message });
        }
      } catch (error) {
        setErrors({ form: 'Error sending email' });
      }
    }
  };

  return (
    <div className='mb-10'>
      <div className='pl-5 pr-5'>
        <h1 className='pt-24 pb-3 text-3xl text-center'>{t.dem.h1}</h1>
        <p className='text-xl pb-2'>{t.dem.pOne}</p>
        <p className='text-xl pb-2'>{t.dem.pTwo}</p>

        <div className='pt-6 pb-9'>
          <h3 className='text-2xl'>{t.dem.h3}</h3>
          <ul className='text-xl'>
            <li className='list-disc pl-2 list-inside'>{t.dem.liOne}</li>
            <li className='list-disc pl-2 list-inside'>{t.dem.liTwo}</li>
            <li className='list-disc pl-2 list-inside'>{t.dem.liThree}</li>
            <li className='list-disc pl-2 list-inside'>{t.dem.liFour}</li>
            <li className='list-disc pl-2 list-inside'>{t.dem.liFive}</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-3 mb-56">
        <h1 className='text-3xl mb-3'>{t.job.apply}</h1>
        
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 mb-2 text-xl">
            {t.form.first}
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2 text-xl">
            {t.form.last}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 mb-2 text-xl">
            {t.form.number}
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2 text-xl">
            {t.form.email}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="employmentDate" className="block text-gray-700 mb-2 text-xl">
            {t.form.date}
          </label>
          <input
            type="date"
            id="employmentDate"
            name="employmentDate"
            value={formData.employmentDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.employmentDate && <p className="text-red-500 text-sm mt-1">{errors.employmentDate}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="cv" className="block text-gray-700 mb-2 text-xl">
            {t.form.cv}
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
          {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
        </div>
        
        {errors.form && <p className="text-red-500 text-sm mt-1">{errors.form}</p>}
        {successMessage && <p className="text-[#0b54a2] text-sm mt-1">{successMessage}</p>}
        
        <button
          type="submit"
          className="w-full bg-[#0b54a2] text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-colors text-xl"
        >
          {t.form.submit}
        </button>
      </form>
    </div>
  );
};

export default DemForm;





// 'use client';

// import React, { useState } from 'react';

// const DemForm = ({ t, locale }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     employmentDate: '',
//     cv: null,
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => {
//       setFormData({
//         ...formData,
//         cv: {
//           name: file.name,
//           content: reader.result.split(',')[1], // Base64 encoded content
//           type: file.type,
//         },
//       });
//     };
//     reader.readAsDataURL(file);
//   };

//   const validate = () => {
//     const errors = {};
//     if (!formData.firstName) errors.firstName = 'First name is required';
//     if (!formData.lastName) errors.lastName = 'Last name is required';
//     if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.employmentDate) errors.employmentDate = 'Employment date is required';
//     if (!formData.cv) errors.cv = 'CV is required';
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       try {
//         const res = await fetch('/api/send-email', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         if (res.status === 200) {
//           setSuccessMessage('Email sent successfully!');
//           setFormData({
//             firstName: '',
//             lastName: '',
//             phoneNumber: '',
//             email: '',
//             employmentDate: '',
//             cv: null,
//           });
//           setErrors({});
//         } else {
//           const result = await res.json();
//           setErrors({ form: result.message });
//         }
//       } catch (error) {
//         setErrors({ form: 'Error sending email' });
//       }
//     }
//   };

//   return (
//     <div className='mb-10'>
//       <div className='pl-5 pr-5'>
//         <h1 className='pt-24 pb-3 text-3xl text-center'>{t.dem.h1}</h1>
//         <p className='text-xl pb-2'>{t.dem.pOne}</p>
//         <p className='text-xl pb-2'>{t.dem.pTwo}</p>

//         <div className='pt-6 pb-9'>
//         <h3 className='text-2xl'>{t.dem.h3}</h3>
//               <ul className='text-xl'>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liOne}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liTwo}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liThree}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liFour}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liFive}</li>
//               </ul>
//         </div>
//       </div>
//       <div className='mb-10'>
// <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-3 mb-56">
//   <h1 className='text-3xl mb-3'>{t.job.apply}</h1>
//   {/* Form fields go here... */}
//   <div className="mb-4">
//         <label htmlFor="firstName" className="block text-gray-700 mb-2 text-xl">
//         {t.form.first}
//         </label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block text-gray-700 mb-2 text-xl">
//         {t.form.last}
//         </label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block text-gray-700 mb-2 text-xl">
//         {t.form.number}
//         </label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 mb-2 text-xl">
//         {t.form.email}
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="employmentDate" className="block text-gray-700 mb-2 text-xl">
//         {t.form.date}
//         </label>
//         <input
//           type="date"
//           id="employmentDate"
//           name="employmentDate"
//           value={formData.employmentDate}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.employmentDate && <p className="text-red-500 text-sm mt-1">{errors.employmentDate}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="cv" className="block text-gray-700 mb-2 text-xl">
//         {t.form.cv}
//         </label>
//         <input
//           type="file"
//           id="cv"
//           name="cv"
//           onChange={handleFileChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
//       </div>
//   {errors.form && <p className="text-red-500 text-sm mt-1">{errors.form}</p>}
//   {successMessage && <p className="text-[#0b54a2] text-sm mt-1">{successMessage}</p>}
//   <button
//     type="submit"
//     className="w-full bg-[#0b54a2] text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-colors text-xl"
//   >
//     {t.form.submit}
//   </button>
// </form>
// </div>
// </div>
// );
// };

// export default DemForm;



// components/ContactForm.js

// 'use client';

// import React, { useState } from 'react';

// const DemForm= ({t}) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     email: '',
//     employmentDate: '',
//     cv: null,
//   });

//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       cv: e.target.files[0],
//     });
//   };

//   const validate = () => {
//     const errors = {};
//     if (!formData.firstName) errors.firstName = 'First name is required';
//     if (!formData.lastName) errors.lastName = 'Last name is required';
//     if (!formData.phoneNumber) errors.phoneNumber = 'Phone number is required';
//     if (!formData.email) errors.email = 'Email is required';
//     if (!formData.employmentDate) errors.employmentDate = 'Employment date is required';
//     if (!formData.cv) errors.cv = 'CV is required';
//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       const formDataToSend = new FormData();
//       formDataToSend.append('firstName', formData.firstName);
//       formDataToSend.append('lastName', formData.lastName);
//       formDataToSend.append('phoneNumber', formData.phoneNumber);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('employmentDate', formData.employmentDate);
//       formDataToSend.append('cv', formData.cv);

//       try {
//         const res = await fetch('/api/send-email', {
//           method: 'POST',
//           body: formDataToSend,
//         });

//         if (res.status === 200) {
//           setSuccessMessage('Email sent successfully!');
//           setFormData({
//             firstName: '',
//             lastName: '',
//             phoneNumber: '',
//             email: '',
//             employmentDate: '',
//             cv: null,
//           });
//           setErrors({});
//         } else {
//           const result = await res.json();
//           setErrors({ form: result.message });
//         }
//       } catch (error) {
//         setErrors({ form: 'Error sending email' });
//       }
//     }
//   };

//   return (
//     <div className='mb-10'>
//       <div className='pl-5 pr-5'>
//         <h1 className='pt-24 pb-3 text-3xl text-center'>{t.dem.h1}</h1>
//         <p className='text-xl pb-2'>{t.dem.pOne}</p>
//         <p className='text-xl pb-2'>{t.dem.pTwo}</p>

//         <div className='pt-6 pb-9'>
//         <h3 className='text-2xl'>{t.dem.h3}</h3>
//               <ul className='text-xl'>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liOne}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liTwo}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liThree}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liFour}</li>
//                   <li className='list-disc pl-2 list-inside'>{t.dem.liFive}</li>
//               </ul>
//         </div>
//       </div>
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto pt-3 mb-56">
//     <h1 className='text-3xl mb-3'>{t.job.apply}</h1>
//       <div className="mb-4">
//         <label htmlFor="firstName" className="block text-gray-700 mb-2 text-xl">
//         {t.form.first}
//         </label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="lastName" className="block text-gray-700 mb-2 text-xl">
//         {t.form.last}
//         </label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phoneNumber" className="block text-gray-700 mb-2 text-xl">
//         {t.form.number}
//         </label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="block text-gray-700 mb-2 text-xl">
//         {t.form.email}
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="employmentDate" className="block text-gray-700 mb-2 text-xl">
//         {t.form.date}
//         </label>
//         <input
//           type="date"
//           id="employmentDate"
//           name="employmentDate"
//           value={formData.employmentDate}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.employmentDate && <p className="text-red-500 text-sm mt-1">{errors.employmentDate}</p>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="cv" className="block text-gray-700 mb-2 text-xl">
//         {t.form.cv}
//         </label>
//         <input
//           type="file"
//           id="cv"
//           name="cv"
//           onChange={handleFileChange}
//           className="w-full px-3 py-2 border rounded-md"
//         />
//         {errors.cv && <p className="text-red-500 text-sm mt-1">{errors.cv}</p>}
//       </div>
//       {errors.form && <p className="text-red-500 text-sm mt-1">{errors.form}</p>}
//       {successMessage && <p className="text-[#0b54a2] text-sm mt-1">{successMessage}</p>}
//       <button
//         type="submit"
//         className="w-full bg-[#0b54a2] text-white py-2 px-4 rounded-sm hover:bg-blue-600 transition-colors text-xl"
//       >
//          {t.form.submit}
//       </button>
//     </form>
//     </div>
//   );
// };

// export default DemForm;