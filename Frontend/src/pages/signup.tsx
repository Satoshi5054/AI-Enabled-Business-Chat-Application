import { User, Mail, Lock } from 'lucide-react';
import AuthLayout from '../components/layouts/auth.layout';
import InputField from '../components/ui/user.input.field';
import {Link} from 'react-router-dom'

const SignUpPage = () => {
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-2">Create an account</h2>
      <p className="text-gray-500 mb-8">Enter your information to get started.</p>
      
      <form>
        <InputField label="Full Name" type="text" placeholder="John Doe" icon={<User size={18} />} value="" onChange={() => {}} />
        <InputField label="Email" type="email" placeholder="name@example.com" icon={<Mail size={18} />} value="" onChange={() => {}} />
        <InputField label="Password" type="password" placeholder="••••••••" icon={<Lock size={18} />} value="" onChange={() => {}} />
        
        <button className="w-full bg-[#0070f3] hover:bg-blue-600 text-white font-semibold py-2.5 rounded-lg transition-colors mt-2">
          Create Account
        </button>
      </form>

      {/* Social Buttons */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-800"></span></div>
        <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#010409] px-2 text-gray-500">Or continue with</span></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center border border-gray-800 rounded-lg py-2 hover:bg-gray-900 text-white">Google</button>
        <button className="flex items-center justify-center border border-gray-800 rounded-lg py-2 hover:bg-gray-900 text-white">Github</button>
      </div>
       <p className="text-center text-gray-500 text-sm mt-8">
        Already have an account? <span className="text-blue-500 cursor-pointer"> <Link  to = "/auth/signin"> Sign in </Link> </span> 
      </p> 
    </AuthLayout>
  );
};

export default SignUpPage;