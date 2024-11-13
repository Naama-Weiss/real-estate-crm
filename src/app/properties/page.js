'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Properties() {
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">מעקב אחר נכסים</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
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
      </div>
    </div>
  );
}