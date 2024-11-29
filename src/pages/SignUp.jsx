
const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center w-full max-w-sm">
        {/* Icon/Image */}
        <div className="flex justify-center mb-8">
          <img
            src="assets/features-icon-3.png"
            alt="Chef Icon"
            className="h-20"
          />
        </div>
        {/* Heading */}
        <h1 className="text-3xl text-yellow-400 font-semibold mb-8">Login</h1>

        {/* Input Fields */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-yellow-500 rounded bg-black text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-yellow-500 rounded bg-black text-white focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-yellow-500 rounded bg-black text-white focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button className="w-full mt-6 bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600">
          Sign Up
        </button>

        {/* Signup Link */}
        <p className="mt-4 text-sm text-gray-400">
          already have an account?{' '}
          <a href="/signup" className="text-red-500">
            Login
          </a>
        </p>

        {/* Divider */}
        <div className="my-4 text-gray-400">OR</div>

        {/* Google Login */}
        <button className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600 flex items-center justify-center">
          <img
            src="assets/google img.png" // Replace with your Google icon path
            alt="Google Icon"
            className="h-5 w-5 mr-2"
          />
          Login with Google
        </button>
      </div>
    </div>
  )
}

export default SignUp