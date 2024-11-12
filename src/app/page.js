export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">מערכת ניהול נדל"ן</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ניהול נכסים */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ניהול נכסים</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>מעקב אחר נכסים</li>
              <li>ניהול פרויקטים ודירות</li>
              <li>מעקב אחר מצב אכלוס</li>
            </ul>
          </div>

          {/* ניהול סיכונים */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ניהול סיכונים</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>זיהוי נכסים בסיכון</li>
              <li>מעקב אחר תנאי שוק</li>
              <li>התראות</li>
            </ul>
          </div>

          {/* ניהול פיננסי */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ניהול פיננסי</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>מעקב הכנסות והוצאות</li>
              <li>ניהול תזרים מזומנים</li>
              <li>דוחות כספיים</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}