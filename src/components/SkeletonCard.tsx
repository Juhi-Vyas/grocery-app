function SkeletonCard() {
  return (
    <div
      className="
        min-w-[170px]
        border
        border-gray-200
        rounded-2xl
        p-4
        animate-pulse
      "
    >
      <div className="w-24 h-24 bg-gray-200 mx-auto rounded-xl"></div>

      <div className="mt-5 h-4 bg-gray-200 rounded"></div>

      <div className="mt-3 h-3 w-20 bg-gray-200 rounded"></div>

      <div className="mt-6 flex justify-between">
        <div className="w-14 h-5 bg-gray-200 rounded"></div>

        <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
  );
}

export default SkeletonCard;