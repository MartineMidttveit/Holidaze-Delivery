export default function Skeleton() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full h-80 bg-gray-300 rounded-lg"/>

      <div className="flex flex-col gap-2.5">
        <span className="w-[70%] h-6 bg-gray-200 rounded"/>
        <span className="w-[45%] h-6 bg-gray-200 rounded"/>
        <span className="w-[60%] h-6 bg-gray-200 rounded"/>

        <div className="grid grid-cols-5 gap-2">
          <span className="w-full h-6 bg-gray-200 rounded"/>
          <span className="w-full h-6 bg-gray-200 rounded"/>
        </div>
      </div>
    </div>
  );
}
