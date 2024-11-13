'use client';

import { useState } from 'react';

export default function AddPropertyForm({ onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    propertyType: '',
    address: {
      street: '',
      city: '',
      zipCode: ''
    },
    size: '',
    rooms: '',
    price: '',
    rent: '',
    status: 'available',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">הוספת נכס חדש</h2>
      
      {/* סוג נכס */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          סוג נכס
        </label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          required
        >
          <option value="">בחר סוג נכס</option>
          <option value="apartment">דירה</option>
          <option value="house">בית פרטי</option>
          <option value="office">משרד</option>
          <option value="store">חנות</option>
        </select>
      </div>

      {/* כתובת */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          כתובת
        </label>
        <input
          type="text"
          name="address.street"
          placeholder="רחוב ומספר"
          value={formData.address.street}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-2"
          required
        />
        <input
          type="text"
          name="address.city"
          placeholder="עיר"
          value={formData.address.city}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 mb-2"
          required
        />
        <input
          type="text"
          name="address.zipCode"
          placeholder="מיקוד"
          value={formData.address.zipCode}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
        />
      </div>

      {/* מאפיינים */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            גודל במ"ר
          </label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            מספר חדרים
          </label>
          <input
            type="number"
            name="rooms"
            value={formData.rooms}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
      </div>

      {/* פרטים כספיים */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            מחיר (₪)
          </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            שכר דירה (₪)
          </label>
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700"
          />
        </div>
      </div>

      {/* סטטוס */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          סטטוס
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700"
          required
        >
          <option value="available">פנוי</option>
          <option value="rented">מושכר</option>
          <option value="renovation">בשיפוץ</option>
        </select>
      </div>

      {/* תיאור */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          תיאור
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="shadow border rounded w-full py-2 px-3 text-gray-700 h-32"
        />
      </div>

      {/* כפתורים */}
      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          ביטול
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          שמור נכס
        </button>
      </div>
    </form>
  );
}