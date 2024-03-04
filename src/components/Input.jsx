import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Data from './Data';

const Input = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatching the actions to add formData to the Redux store
    dispatch({
      type: 'ADD_DATA',
      payload: formData,
    });
    // Clear form
    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
    });
  };

  return (
    <>

    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label htmlFor="name" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
        </div>
        <div className="w-full md:w-1/2 px-3">
        <label htmlFor="phone" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Phone:</label>
        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
        </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
        </div>
        <div className="w-full md:w-1/2 px-3">
        <label htmlFor="city" className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">City:</label>
        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" />
        </div>
    </div>
    <div className="flex justify-center">
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </div>
    </form>

    <Data />

    </>


  );
};

export default Input;
