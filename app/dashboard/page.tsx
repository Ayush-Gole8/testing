"use client"

import React, { useMemo, useState } from 'react'
import styles from './dashboard.module.css'

type Stat = { id: number; title: string; value: string; delta: string }
type Activity = { id: number; user: string; action: string; time: string }

const initialStats: Stat[] = [
  { id: 1, title: 'Total Users', value: '12,348', delta: '+3.4%' },
  { id: 2, title: 'Active Sessions', value: '1,024', delta: '+1.1%' },
  { id: 3, title: 'Revenue', value: '$24,560', delta: '+8.2%' },
  { id: 4, title: 'New Signups', value: '312', delta: '+6.0%' },
]

const initialRecent: Activity[] = [
  { id: 1, user: 'Maria K.', action: 'Created invoice #1024', time: '2h ago' },
  { id: 2, user: 'Jon P.', action: 'Updated project settings', time: '4h ago' },
  { id: 3, user: 'Sana R.', action: 'New signup', time: '6h ago' },
  { id: 4, user: 'Alex B.', action: 'Commented on issue #88', time: '8h ago' },
]

const formatNumber = (n: number) => n.toLocaleString()

const DashboardPage: React.FC = () => {
  const [stats, setStats] = useState<Stat[]>(initialStats)
  const [recent] = useState<Activity[]>(initialRecent)
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return recent
    return recent.filter((r) => r.user.toLowerCase().includes(q) || r.action.toLowerCase().includes(q))
  }, [query, recent])

  const refreshStats = async () => {
    setLoading(true)
    // simulate fetching new numbers
    setTimeout(() => {
      setStats((s) =>
        s.map((st) => {
          const base = Math.max(1, parseInt(st.value.toString().replace(/[^0-9]/g, '')) || 100)
          const delta = (Math.random() * 10 - 5).toFixed(1)
          const value = st.title === 'Revenue' ? `$${formatNumber(Math.round(base * (1 + Math.random() * 0.3)))}` : formatNumber(Math.max(1, Math.round(base * (1 + (Math.random() - 0.5) * 0.2))))
          return { ...st, value, delta: (delta > 0 ? '+' : '') + delta + '%' }
        })
      )
      setLoading(false)
    }, 600)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>Welcome back, <strong>Alex</strong> — here's what's happening</p>
        </div>

        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <label htmlFor="search" className="sr-only">Search activity</label>
          <input
            id="search"
            placeholder="Search activity or user"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{padding:'8px 10px',borderRadius:8,background:'#071022',border:'1px solid rgba(255,255,255,0.04)',color:'#e6eef8'}}
          />
          <button onClick={refreshStats} className={styles.btn} aria-live="polite" aria-label="Refresh stats" disabled={loading}>
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>
        </div>
      </header>

      <section className={styles.statsGrid} aria-label="Key metrics">
        {stats.map((s) => (
          <article key={s.id} className={styles.card} aria-roledescription="metric">
            <div className={styles.cardTitle}>{s.title}</div>
            <div className={styles.cardValue}>{s.value}</div>
            <div className={styles.cardDelta}>{s.delta}</div>
          </article>
        ))}
      </section>

      <section className={styles.mainGrid}>
        <div className={styles.chartCard}>
          <h2 className={styles.sectionTitle}>Activity Overview</h2>
          <div className={styles.chartPlaceholder} aria-hidden>
            <svg viewBox="0 0 100 40" className={styles.simpleChart}>
              <rect x="5" y="12" width="10" height="28" rx="2" fill="#6c5ce7" />
              <rect x="20" y="6" width="10" height="34" rx="2" fill="#a29bfe" />
              <rect x="35" y="18" width="10" height="22" rx="2" fill="#6c5ce7" />
              <rect x="50" y="10" width="10" height="30" rx="2" fill="#a29bfe" />
              <rect x="65" y="22" width="10" height="18" rx="2" fill="#6c5ce7" />
              <rect x="80" y="8" width="10" height="32" rx="2" fill="#a29bfe" />
            </svg>
          </div>
          <p className={styles.hint}>Quick snapshot of recent activity. Use the chart for high-level trends.</p>
        </div>

        <aside className={styles.sideCard}>
          <div>
            <h3 className={styles.sectionTitle}>Quick Actions</h3>
            <div className={styles.actions}>
              <button className={styles.btnPrimary}>Create Report</button>
              <button className={styles.btn}>Invite Member</button>
            </div>
          </div>

          <div className={styles.activity}>
            <h3 className={styles.sectionTitle}>Recent Activity</h3>
            <ul className={styles.activityList}>
              {filtered.map((r) => (
                <li key={r.id} className={styles.activityItem}>
                  <div className={styles.avatar}>{r.user.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
                  <div>
                    <div className={styles.activityText}><strong>{r.user}</strong> — {r.action}</div>
                    <div className={styles.activityTime}>{r.time}</div>
                  </div>
                </li>
              ))}
              {filtered.length === 0 && <li className={styles.activityItem}><div className={styles.activityText}>No activity found.</div></li>}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default DashboardPage