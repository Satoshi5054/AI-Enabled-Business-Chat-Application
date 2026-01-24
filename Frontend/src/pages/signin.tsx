import AuthLayout from '../components/layouts/auth.layout'
import { Mail, Lock } from 'lucide-react'
import InputField from '../components/ui/user.input.field'
import {Link} from 'react-router-dom'

const SignInPage = () => {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
      <p className="text-gray-500 mb-8">Enter your credentials to access your account.</p>
      
      <form>
        <InputField label="Email" type="email" placeholder="name@example.com" icon={<Mail size={18} />} value="" onChange={() => {}} />
        <div className="relative">
          <InputField label="Password" type="password" placeholder="••••••••" icon={<Lock size={18} />} value="" onChange={() => {}} />
          <button className="absolute right-0 top-0 text-sm text-blue-500 hover:text-blue-400">Forgot password?</button>
        </div>
        
        <button className="w-full bg-[#0070f3] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg mt-4">
          Sign In
        </button>
      </form>
      
      <p className="text-center text-gray-500 text-sm mt-8">
        Don't have an account? <span className="text-blue-500 cursor-pointer"> <Link  to = "/register"> Sign up </Link> </span> 
      </p> 
    </AuthLayout>
  );
};

export default SignInPage;