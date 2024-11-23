export default function Pill({ text }: { text: string }) {
  return (
    <div className="bg-pills-background text-white p-2 rounded-sm ml-2 font-bold">
      {text}
    </div>
  );
}
