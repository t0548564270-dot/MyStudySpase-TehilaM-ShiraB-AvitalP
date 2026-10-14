import styles from './StudyChecklist.module.css';
function StudyChecklist() {
  return (
<div className={styles.checklistContainer}>      <h2>Study Checklist📋</h2>
      <p>רשימת משימות לימודיות</p>
     <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li className={styles.taskItem}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>1.</span>
            <input type="checkbox" />
            <span>תכנון סדר היום והגדרת מטרות לזמן הלמידה</span>
          </label>
        </li>
        <li className={styles.taskItem}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>2.</span>
            <input type="checkbox" />
            <span>סיכום חומרי הלימוד בצורה ברורה ומסודרת</span>
          </label>
        </li>
        <li className={styles.taskItem}>

          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>3.</span>
            <input type="checkbox" />
            <span>תרגול מעשי ובחינת הבנת הנושאים הנלמדים</span>
          </label>
        </li>
        <li className={styles.taskItem}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>4.</span>
            <input type="checkbox" />
            <span>הפסקה קצרה לאגירת כוחות והתרעננות</span>
          </label>
        </li>
        <li className={styles.taskItem}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>5.</span>
            <input type="checkbox" />
            <span>מעבר סופי על החומר ווידוא השלמת כל המשימות</span>
          </label>
        </li>
      </ul>
    </div>
  );
}

export default StudyChecklist;