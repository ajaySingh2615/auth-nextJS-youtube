export default function UserProfile({ params }: any) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
              User profile
            </h1>
            <span className="inline-flex items-center rounded-md bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 ring-1 ring-inset ring-orange-200">
              ID
              <span className="ml-2 rounded bg-orange-500/90 px-2 py-0.5 text-white font-mono text-xs">
                {params.id}
              </span>
            </span>
          </div>

          <p className="mt-4 text-gray-600">This is your profile page.</p>

          <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
            <p className="text-sm text-gray-700">User identifier</p>
            <p className="mt-1 font-mono text-lg text-gray-900">{params.id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
