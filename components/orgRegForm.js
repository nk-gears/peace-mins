import React, { useState } from 'react';

const OrgRegFormComponent = () => {




  const [formData, setFormData] = useState({
    org_name: '',    
    org_city: '',
    org_email: '',
    org_mobile: '',
    org_agreeTerms: false

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
      <div className="mb-4 ">


        <label htmlFor="org_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Organization Name
        </label>
        <input
          type="text"
          id="org_name"
          name="org_name"
          value={formData.name}
          onChange={handleChange}
          required
        //   className="border border-gray-400 px-4 py-2 rounded-lg w-full"
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
 
      <div className="mb-4">
        <label htmlFor="org_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           City
        </label>
        <input
          type="text"
          id="org_city"
          name="org_city"
          value={formData.city}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="mb-4 ">


<label htmlFor="org_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  Contact Name
</label>
<input
  type="text"
  id="org_name"
  name="org_name"
  value={formData.org_name}
  onChange={handleChange}
  required
//   className="border border-gray-400 px-4 py-2 rounded-lg w-full"
className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
/>
</div>
      <div className="mb-4">
        <label htmlFor="org_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Contact Email
        </label>
        <input
          type="email"
          id="org_email"
          name="org_email"
          value={formData.org_email}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="org_mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Contact Mobile Number
        </label>
        <input
          type="tel"
          id="org_mobile"
          name="org_mobile"
          value={formData.org_mobile}
          onChange={handleChange}
          required
          className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="ml-3 text-sm">

        <label  htmlFor="org_agreeTerms"   className=" text-gray-900   font-medium  dark:text-gray-300" >
          <input
            type="checkbox"
            id="org_agreeTerms"
            name="org_agreeTerms"
            checked={formData.org_agreeTerms}
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
                  Register for Group Participation
                </button>
    </form>
  );
};

export default OrgRegFormComponent;