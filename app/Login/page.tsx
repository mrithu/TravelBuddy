import Image from 'next/image'
import { Inter } from 'next/font/google'
import AddTravel from '@/components/AddTravel'
import TravelsList from '@/components/TravelsList'
import { getAllTravels } from '@/api'
import LoginForm from '@/components/LoginForm'
import SignUpForm from '@/components/SignUpForm'


const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const Travels = await getAllTravels();

  return (
      <div className="max-w-4xl mx-auto my-5 flex flex-col gap-4">
          <LoginForm />
        
      </div>
  )
}