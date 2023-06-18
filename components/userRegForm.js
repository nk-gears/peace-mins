import React, { useState } from 'react';

const UserRegFormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    city: '',
    email: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here, such as sending it to a server

    // Reset the form fields
    setFormData({
      name: '',
      age: '',
      gender: '',
      city: '',
      email: '',
      mobile: ''
    });
  };

  return (
    <form className="max-w-md mx-auto space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div className="mb-4">


        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        //   className="border border-gray-400 px-4 py-2 rounded-lg w-full"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Age
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>


   
      <div>
      <label className="block text-sm font-medium text-gray-900 dark:text-white my-2">Your Gender</label>
                  <div className="flex items-center pl-4 m-0 p-0 border border-gray-200 rounded dark:border-gray-700">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formData.gender === 'male'}
                      onChange={handleChange}
                      required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="male"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Male
                    </label>
                    <input
                       type="radio"
                       id="female"
                       name="gender"
                       value="female"
                       checked={formData.gender === 'female'}
                       onChange={handleChange}
                       required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                       htmlFor="female"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Female
                    </label>

                    <input
                             type="radio"
                             id="other"
                             name="gender"
                             value="other"
                             checked={formData.gender === 'other'}
                             onChange={handleChange}
                             required
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                        htmlFor="other"
                      className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Other
                    </label>
                  </div>
                </div>
   
       
    
 
      <div className="mb-4">
        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your Mobile Number
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="ml-3 text-sm">

        <label  htmlFor="agreeTerms"   className=" text-gray-900   font-bold  dark:text-gray-300" >
          <input
            type="checkbox"
            id="agreeTerms"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            required
            className="mr-2"
          />
          I agree to the terms and conditions
        </label>
      </div>

      <button
                  type="submit"
                  className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center light:bg-brandBase-600 light:hover:bg-indigo-700 light:focus:ring-indigo-800"
                >
                  Register & Participate
                </button>
    </form>
  );
};

export default UserRegFormComponent;