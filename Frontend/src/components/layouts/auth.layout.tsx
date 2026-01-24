import UserLoginPageImage from "../../assets/user-login-page.jpeg";

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => (
  <div className="min-h-screen flex bg-[#11176d]">
    {/* Left Side: Marketing Content */}
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#11176d]">
      <img 
        src={UserLoginPageImage} 
        alt="Office background" 
        className="absolute w-full h-full object-cover opacity-80"
      />
      <div className="relative z-10 p-20 flex flex-col justify-center">
        <h1 className="text-6xl font-bold text-white leading-tight mb-6">
          Connect your team <br /> with Enterprise AI.
        </h1>
        <p className="text-gray-400 pb-20 text-xl max-w-md">
          The secure workspace for business communication. Boost productivity with AI-powered insights.
        </p>
      </div>
    </div>

    {/* Right Side: Auth Form */}
    <div className="w-full bg-[#010c1f] lg:w-1/2 flex items-center justify-center p-8">
      <div className="max-w-md w-full">
        {children}
      </div>
    </div>
  </div>
)

export default AuthLayout