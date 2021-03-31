import { useEffect } from 'react'

export default function Home() {
  return (
    <div>
      <form method="POST" action="/api/login" >
        <input type="text" name="username" defaultValue="admin" /><br/>
        <input type="text" name="password" defaultValue="password" /><br/>
        <input type="submit" value="Login" /><br/>
      </form>
    </div>
  )
}
