'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('all');

  const areas = {
    properties: {
      title: "ניהול נכסים",
      items: ["מעקב אחר נכסים", "ניהול פרויקטים ודירות", "מעקב אחר מצב אכלוס"],
      color: "bg-blue-50 hover:bg-blue-100",
      path: "/properties"
    },
    risks: {
      title: "ניהול סיכונים",
      items: ["זיהוי נכסים בסיכון", "מעקב אחר תנאי שוק", "התראות"],
      color: "bg-green-50 hover:bg-green-100",
      path: "/risks"
    },
    finance: {
      title: "ניהול פיננסי",
      items: ["מעקב הכנסות והוצאות", "ניהול תזרים מזומנים", "דוחות כספיים"],
      color: "bg-purple-50 hover:bg-purple-100",
      path: "/finance"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">מערכת ניהול נדל"ן</h1>
        
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8 rtl">
          <button
            onClick={() => setSelectedTab('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedTab === 'all' ? 'bg-blue-500 text-white' : 'bg-white hover:bg-gray-100'
            }`}
          >
            כל תחומי הניהול
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <ArrowLeft className="ml-2" size={20} />
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