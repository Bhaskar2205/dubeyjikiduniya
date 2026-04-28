export default function ShayariHighlight({ text }: { text: string }) {
  return (
    <div className="border-l-4 border-white pl-4 my-8 italic text-2xl opacity-90">
      {text}
    </div>
  );
}