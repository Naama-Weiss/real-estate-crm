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

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'price':
        return value && value > 0 ? '' : 'מחיר חייב להיות גדול מ-0';
      case 'rent':
        return value && value < 0 ? 'שכר דירה לא יכול להיות שלילי' : '';
      case 'size':
        return value && value > 0 ? '' : 'גודל חייב להיות גדול מ-0';
      case 'rooms':
        return value && value > 0 ? '' : 'מספר חדרים חייב להיות גדול מ-0';
      case 'address.street':
        return value.trim() ? '' : 'כתובת היא שדה חובה';
      case 'address.city':
        return value.trim() ? '' : 'עיר היא שדה חובה';
      case 'propertyType':
        return value ? '' : 'יש לבחור סוג נכס';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // עדכון הערך
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
    
    // בדיקת ולידציה
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // בדיקת ולידציה לכל השדות
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'object') {
        Object.keys(formData[key]).forEach(subKey => {
          const error = validateField(`${key}.${subKey}`, formData[key][subKey]);
          if (error) newErrors[`${key}.${subKey}`] = error;
        });
      } else {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    if (Object.keys(newErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(newErrors);
      // הצגת הודעה למשתמש
      alert('יש לתקן את השגיאות בטופס');
    }
  };

  const getInputClassName = (fieldName) => {
    return `shadow border rounded w-full py-2 px-3 ${
      errors[fieldName] 
        ? 'border-red-500 text-red-700' 
        : 'border-gray-300 text-gray-700'
    }`;
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
          className={getInputClassName('propertyType')}
        >
          <option value="">בחר סוג נכס</option>
          <option value="apartment">דירה</option>
          <option value="house">בית פרטי</option>
          <option value="office">משרד</option>
          <option value="store">חנות</option>
        </select>
        {errors.propertyType && (
          <p className="text-red-500 text-xs mt-1">{errors.propertyType}</p>
        )}
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
          className={getInputClassName('address.street')}
        />
        {errors['address.street'] && (
          <p className="text-red-500 text-xs mt-1">{errors['address.street']}</p>
        )}
        
        <input
          type="text"
          name="address.city"
          placeholder="עיר"
          value={formData.address.city}
          onChange={handleChange}
          className={`${getInputClassName('address.city')} mt-2`}
        />
        {errors['address.city'] && (
          <p className="text-red-500 text-xs mt-1">{errors['address.city']}</p>
        )}
        
        <input
          type="text"
          name="address.zipCode"
          placeholder="מיקוד"
          value={formData.address.zipCode}
          onChange={handleChange}
          className={`${getInputClassName('address.zipCode')} mt-2`}
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
            className={getInputClassName('size')}
          />
          {errors.size && (
            <p className="text-red-500 text-xs mt-1">{errors.size}</p>
          )}
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
            className={getInputClassName('rooms')}
          />
          {errors.rooms && (
            <p className="text-red-500 text-xs mt-1">{errors.rooms}</p>
          )}
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
            className={getInputClassName('price')}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
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
            className={getInputClassName('rent')}
          />
          {errors.rent && (
            <p className="text-red-500 text-xs mt-1">{errors.rent}</p>
          )}
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
          className={getInputClassName('status')}
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
          className={`${getInputClassName('description')} h-32`}
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