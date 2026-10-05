// Renders text where **double asterisks** mark bold words.
export default function RichText({ text }: { text: string }) {
  const parts = text.split("**")
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-neutral-900 dark:text-neutral-100">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  )
}
