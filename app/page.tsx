import LoginForm from "@/components/login-form"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">DriveEasy</h1>
          <p className="mt-2 text-gray-600">Your premium car rental service</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
