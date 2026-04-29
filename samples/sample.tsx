// @ts-nocheck
import { useState, useEffect, useRef, type FC, type ReactNode } from 'react'

// Props types
interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

// Simple component
const Button: FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

// Component with children
const Card: FC<{ title: string; children: ReactNode }> = ({ title, children }) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <div className="card__body">{children}</div>
    </div>
  )
}

// Hooks, state, effects
const UserList: FC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  const [loading, setLoading] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = `Count: ${count}`
    return () => {
      document.title = 'App'
    }
  }, [count])

  const handleClick = () => setCount(c => c + 1)

  // Conditional rendering
  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div ref={ref}>
      <Card title="Users">
        {count === 0 ? (
          <p>No users yet.</p>
        ) : (
          <ul>
            {Array.from({ length: count }, (_, i) => (
              <li key={i}>User {i + 1}</li>
            ))}
          </ul>
        )}
      </Card>
      <Button label="Add user" onClick={handleClick} />
    </div>
  )
}

export default UserList
