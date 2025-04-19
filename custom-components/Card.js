export default function Card({ title, children }) {
  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md ring-1 ring-gray-300 p-4 gap-2">
      {children}
    </div>
  );
}
