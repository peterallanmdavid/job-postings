import Link from "next/link";

export default function Tag({
  text,
  onClick,
}: {
  text: string;
  onClick: (text: string) => string;
}) {
  return (
    <Link
      className="text-primary p-2 bg-ligh-gray-cyan-2 rounded-md font-bold hover:bg-primary hover:text-white text-sm"
      href={onClick(text)}
    >
      {text}
    </Link>
  );
}
