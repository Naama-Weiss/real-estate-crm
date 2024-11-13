'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe } from 'lucide-react';
import { getLocale } from '../lib/i18n';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('all');
  const [language, setLanguage] = useState('he');
  const t = getLocale(language);

  const languageNames = {
    he: 'עברית',
    en: 'English',
    ro: 'Română'
  };

  const areas = {
    properties: {
      title: t.areas.properties.title,
      items: [
        t.areas.properties.items.tracking,
        t.areas.properties.items.projects,
        t.areas.properties.items.occupancy
      ],
      color: "bg-blue-50 hover:bg-blue-100",
      path: "/properties"
    },
    risks: {
      title: t.areas.risks.title,
      items: [
        t.areas.risks.items.identification,
        t.areas.risks.items.marketTracking,
        t.areas.risks.items.alerts
      ],
      color: "bg-green-50 hover:bg-green-100",
      path: "/risks"
    },
    finance: {
      title: t.areas.finance.title,
      items: [
        t.areas.finance.items.tracking,
        t.areas.finance.items.cashFlow,
        t.areas.finance.items.reports
      ],
      color: "bg-purple-50 hover:bg-purple-100",
      path: "/finance"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end mb-4">
          <div className="relative">
            <div className="flex items-center space-x-2 border rounded-lg p-2 cursor-pointer hover:bg-gray-100">
              <Globe size={20} className="text-gray-500" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent border-none cursor-pointer focus:outline-none rtl:ml-2 ltr:mr-2"
              >
                {Object.entries(languageNames).map(([code, name]) => (
                  <option key={code} value={code}>{name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center" dir={language === 'he' ? 'rtl' : 'ltr'}>
          {language === 'he' ? 'מערכת ניהול נדל"ן' : 
           language === 'en' ? 'Real Estate Management System' :
           'Sistem de Management Imobiliar'}
        </h1>
        
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8" dir={language === 'he' ? 'rtl' : 'ltr'}>
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'all' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'
            }`}
          >
            {t.general.allAreas}
          </button>
          {Object.entries(areas).map(([key, area]) => (
            <button
              key={key}
              onClick={() => setSelectedTab(key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedTab === key ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir={language === 'he' ? 'rtl' : 'ltr'}>
          {Object.entries(areas)
            .filter(([key]) => selectedTab === 'all' || selectedTab === key)
            .map(([key, area]) => (
              <Link
                href={area.path}
                key={key}
              >
                <div
                  className={`p-6 rounded-lg shadow-lg ${area.color} transition-transform hover:scale-105 cursor-pointer relative`}
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
                    {area.title}
                    <ArrowLeft className={`${language === 'he' ? 'ml-2' : 'mr-2'}`} size={20} />
                  </h2>
                  <ul className="space-y-2">
                    {area.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-1.5 w-1.5 bg-gray-500 rounded-full ml-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}