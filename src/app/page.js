'use client';

import { useState } from 'react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState('all');

  const features = [
    {
      title: "ניהול נכסים",
      items: ["מעקב אחר נכסים", "ניהול פרויקטים ודירות", "מעקב אחר מצב אכלוס"],
      id: "properties"
    },
    {
      title: "ניהול סיכונים",
      items: ["זיהוי נכסים בסיכון", "מעקב אחר תנאי שוק", "התראות"],
      id: "risks"
    },
    {
      title: "ניהול פיננסי",
      items: ["מעקב הכנסות והוצאות", "ניהול תזרים מזומנים", "דוחות כספיים"],
      id: "finance"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">מערכת ניהול נדל"ן</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setSelectedTab('all')}
              className={`${
                selectedTab === 'all'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              כל המודולים
            </button>
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setSelectedTab(feature.id)}
                className={`${
                  selectedTab === feature.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                {feature.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features
            .filter(feature => selectedTab === 'all' || selectedTab === feature.id)
            .map((feature) => (
              <div
                key={feature.id}
                className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <ul className="mt-3 list-disc list-inside space-y-2">
                    {feature.items.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}