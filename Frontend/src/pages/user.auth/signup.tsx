import { useState } from "react"
import {Link, useNavigate} from 'react-router-dom'
import { User, Mail, Lock } from 'lucide-react'

import AuthLayout from '../../components/layouts/auth.layout'
import InputField from '../../components/ui/user.input.field'
import {signUp} from "../../services/auth.service"

const SignUpPage = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [field]: e.target.value})
    console.log("setting"+e.target.value)
  }

  const handleSubmit = async (e : React.FormEvent) => {
    e.preventDefault()
    console.log("handle started")
    try {
      setLoading(true);
      const res = await signUp(form);

      // Save JWT
      localStorage.setItem("token", res.token);
      console.log("handle done")
      // Redirect after success
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-2">Create an account</h2>
      <p className="text-gray-500 mb-8">Enter your information to get started.</p>
       {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={(e)=>handleSubmit(e)}>
        <InputField label="Full Name" type="text" placeholder="John Doe" icon={<User size={18} />} value={form.name} onChange={handleChange("name")} />
        <InputField label="Email" type="email" placeholder="name@example.com" icon={<Mail size={18} />} value={form.email} onChange={handleChange("email")} />
        <InputField label="Password" type="password" placeholder="••••••••" icon={<Lock size={18} />} value={form.password} onChange={handleChange("password")} />
        
        <button disabled={loading} className="w-full bg-[#0071f3] hover:bg-blue-900 text-white font-semibold py-2.5 rounded-lg transition-colors mt-2">
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      {/* Social Buttons */}
      <div className="my-8">
        <div className="flex justify-center text-xs "><span className="bg-[#010409] text-gray-200">OR CONTINUE WITH</span></div>
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