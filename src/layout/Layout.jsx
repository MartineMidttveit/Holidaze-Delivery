import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Providers from '../components/providers'
import { Toaster } from 'sonner'

const queryClient = new QueryClient()

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <Header />
        <Outlet />
        <Toaster richColors />
        <Footer />
      </Providers>
    </QueryClientProvider>
  )
}
