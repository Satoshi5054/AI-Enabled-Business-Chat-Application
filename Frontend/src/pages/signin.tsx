import { useState } from "react";
import AuthLayout from "../components/layouts/auth.layout";
import { Mail, Lock } from "lucide-react";
import InputField from "../components/ui/user.input.field";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth.service";

const SignInPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await signIn({ email, password });

      // OPTIONAL: store token
      localStorage.setItem("token", data.token);

      // Redirect after success
      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err?.response?.data?.message || "Invalid email or password"
      );
    } finally {
      setLoading(false)
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-2">Welcome back</h2>
      <p className="text-gray-500 mb-8">
        Enter your credentials to access your account.
      </p>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          placeholder="name@example.com"
          icon={<Mail size={18} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <InputField
            label="Password"
            type="password"
            placeholder="••••••••"
            icon={<Lock size={18} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-0 top-0 text-sm text-blue-500 hover:text-blue-400"
          >
            Forgot password?
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0070f3] hover:bg-blue-600 disabled:opacity-50
                     text-white font-semibold py-2.5 rounded-lg mt-4"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      <p className="text-center text-gray-500 text-sm mt-8">
        Don't have an account?
        <Link to="/auth/register" className="text-blue-500 ml-1 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
};

export default SignInPage;
