// components/ShimmerCard.jsx
export default function ShimmerCard() {
    return (
      <div className="p-4 bg-white rounded-xl shadow-md w-full max-w-md animate-pulse">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    );
  }
  