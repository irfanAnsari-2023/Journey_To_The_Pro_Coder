import React, { useState } from 'react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    state: '',
    city: '',
    interest: '',
    skill: '',
    specify: '',
    availability: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for signing up to volunteer!');
    setFormData({
      firstname: '', lastname: '', email: '', phone: '', state: '', city: '',
      interest: '', skill: '', specify: '', availability: ''
    });
  };

  return (
    <section className='max-w-2xl mx-auto px-4 py-10'>
      <h2 className='text-3xl font-bold mb-6 text-center text-green-600'>Volunteer With Us</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input type='text' name='firstname' value={formData.firstname} onChange={handleChange} placeholder='First Name' required className='w-full px-4 py-2 border rounded-lg' />
        <input type='text' name='lastname' value={formData.lastname} onChange={handleChange} placeholder='Last Name' required className='w-full px-4 py-2 border rounded-lg' />
        <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' required className='w-full px-4 py-2 border rounded-lg' />
        <input type='tel' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number' required className='w-full px-4 py-2 border rounded-lg' />
        <input type='text' name='state' value={formData.state} onChange={handleChange} placeholder='State' required className='w-full px-4 py-2 border rounded-lg' />
        <input type='text' name='city' value={formData.city} onChange={handleChange} placeholder='City' required className='w-full px-4 py-2 border rounded-lg' />

        <select name='interest' value={formData.interest} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg'>
          <option value=''>Area of Interest</option>
          <option>Education</option>
          <option>Child Protection</option>
          <option>Health and Nutrition</option>
          <option>Humanitarian Response</option>
          <option>Campaigning</option>
          <option>Fundraising</option>
          <option>Others</option>
        </select>
        {formData.interest === 'Others' && (
          <input type='text' name='specify' value={formData.specify} onChange={handleChange} placeholder='Please specify your skill' className='w-full px-4 py-2 border rounded-lg' />
        )}

        <select name='skill' value={formData.skill} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg'>
          <option value=''>Skillset</option>
          <option>Doctor</option>
          <option>Teacher</option>
          <option>Healthcare Professional</option>
          <option>Child Care Expert</option>
          <option>Blogger</option>
          <option>Fundraiser</option>
          <option>Activist</option>
          <option>Campaign</option>
          <option>Others</option>
        </select>

        {formData.skill === 'Others' && (
          <input type='text' name='specify' value={formData.specify} onChange={handleChange} placeholder='Please specify your skill' className='w-full px-4 py-2 border rounded-lg' />
        )}

        <select name='availability' value={formData.availability} onChange={handleChange} required className='w-full px-4 py-2 border rounded-lg'>
          <option value=''>Availability</option>
          <option>Part-time</option>
          <option>Full-time</option>
        </select>

        <button type='submit' className='bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg'>
          Submit
        </button>
      </form>
    </section>
  );
}

export default VolunteerForm