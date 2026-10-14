import { useState, useEffect } from 'react';
function StudyTime() {
const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ direction: 'rtl', textAlign: 'right', marginTop: '20px' }}>
      <h2>⌚ Study Time</h2>
      <p>מעקב אחר זמני הלמידה והשעה הנוכחית:</p>
      <div style={{ fontSize: '18px', fontWeight: 'bold', padding: '10px', background: '#fdaff5', borderRadius: '5px', display: 'inline-block' }}>
        📅 תאריך: {currentDateTime.toLocaleDateString('he-IL')} | ⏰ שעה: {currentDateTime.toLocaleTimeString('he-IL')}
      </div>
    </div>
  );
}

export default StudyTime;