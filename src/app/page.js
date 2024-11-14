'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Risks() {
  const { t, dir } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Link 
            href="/"
            className="flex items-center text-blue-500 hover:text-blue-700"
          >
            <ArrowRight className="mr-2" />
            {t.general.backHome}
          </Link>
        </div>
        
        <h1 className="text-4xl font-bold mb-8">{t.areas.risks.title}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={dir}>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.risks.items.identification}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              {t.areas.risks.buttons.review}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.risks.items.marketTracking}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              {t.areas.risks.buttons.viewMarket}
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">{t.areas.risks.items.alerts}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              {t.areas.risks.buttons.setAlerts}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}