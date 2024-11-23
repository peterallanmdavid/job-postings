export default function Tag({ text }: { text: string }) {
  return (
    <div className="text-primary p-2 bg-background rounded-md ml-2 font-bold">
      {text}
    </div>
  );
}
