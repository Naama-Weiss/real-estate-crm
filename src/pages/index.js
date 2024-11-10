import React from 'react';
import RiskManagement from '../components/RiskManagement';
import CashFlowManagement from '../components/CashFlowManagement';
import PropertyComparison from '../components/PropertyComparison';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">ניהול נדל"ן</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <RiskManagement />
        <CashFlowManagement />
        <PropertyComparison />
      </main>
    </div>
  );
}