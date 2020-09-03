import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/client'

export default function Header () {
  const [session] = useSession()

  const handleLogin = (e) => {
    e.preventDefault()
    signIn('github')
  }

  const handleLogout = (e) => {
    e.preventDefault()
    signOut()
  }

  return (
    <div className='header'>
      <Link href='/'>
        <a className='title'>My Blog</a>
      </Link>
    </div>
  )
}