export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center font-bold text-4xl">
      {children}
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
    </h2>
  )
}
