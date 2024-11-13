'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AddPropertyForm from '@/components/AddPropertyForm';

export default function Properties() {
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddProperty = (data) => {
    console.log('New property data:', data);
    setShowAddForm(false);
    // כאן בעתיד נוסיף את השמירה במסד הנתונים
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            href="/"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <ArrowRight className="mr-2" />
            חזרה לדף הבית
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">ניהול נכסים</h1>
        
        {showAddForm ? (
          <AddPropertyForm 
            onSubmit={handleAddProperty}
            onCancel={() => setShowAddForm(false)}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">מעקב אחר נכסים</h2>
              <button 
                onClick={() => setShowAddForm(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                הוסף נכס חדש
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">ניהול פרויקטים</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                צור פרויקט חדש
              </button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">מצב אכלוס</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                צפה בדוח אכלוס
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}