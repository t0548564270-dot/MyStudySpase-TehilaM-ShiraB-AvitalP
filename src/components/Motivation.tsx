function Motivation() {
  // רשימת משפטי המוטיבציה
  const quotes = [
    "🌱 כִּי שֶׁבַע יִפֹּל צַדִּיק וָקָם (משלי כד, טז) – תזכורת לכך שגם כשהחומר קשה, תמיד ממשיכים קדימה ומנסים שוב.",
    "📚 לֵב שֹׁמֵעַ יִקְנֶה דָּעַת (משלי יח, טו) – פתיחת הלב והראש לריכוז וקשב מביאה בעקבותיה צמיחה והבנה עמוקה של החומר.",
    "✨ יָגַעְתָּ וּמָצָאת – תַּאֲמִין – עידוד לכך שכל רגע של השקעה, מאמץ והתמדה בלימודים – בסופו של דבר מביא איתו תוצאות והצלחה.",
    "🌾 הַזֹּרְעִים בְּדִמְעָה – בְּרִנָּה יִקְצֹרוּ (תהילים קכו, ה) – העמל וההשקעה המאומצת בשעות הלימוד הם הבסיס שעליו קוטפים את פירות ההצלחה.",
    "🧭 בְּטַח אֶל-יְהוָה בְּכָל-לִבֶּךָ (משלי ג, ה) – הכוח לשאוב השראה, רוגע וביטחון להמשיך ולעשות את המיטב בכל משימה ועניין."
  ];

  // פונקציה שבוחרת משפט אקראי ומציגה אותו ב-alert
  const showRandomMotivation = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    alert(quotes[randomIndex]);
  };

  return (
    <div style={{ direction: 'rtl', textAlign: 'right', marginTop: '20px' }}>
      <h2>Motivation 💪</h2>
      <p>משפטי מוטיבציה ללימוד:</p>
      
      <button 
        onClick={showRandomMotivation}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#eef8f0',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        לחצי לקבלת משפט מוטיבציה 💡
      </button>
    </div>
  );
}

export default Motivation;