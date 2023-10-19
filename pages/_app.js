import '@/styles/globals.css'
import UserProv from '@/context/user';
export default function App({ Component, pageProps }) {
  return (
    <>
        <UserProv>
          <Component {...pageProps} />
        </UserProv>
    </>
  )
}
