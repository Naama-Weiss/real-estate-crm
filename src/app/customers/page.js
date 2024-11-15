'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';

export default function Customers() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <div className="flex items-center mb-8">
          <Link 
            href="/"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <ArrowRight className="mr-2" />
            {t.general.backHome}
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8" dir={dir}>{t.areas.customers.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={dir}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.customers.items.management}</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              {t.areas.customers.buttons.addCustomer}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.customers.items.contracts}</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              {t.areas.customers.buttons.viewContracts}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.customers.items.communications}</h2>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              {t.areas.customers.buttons.manageComm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}