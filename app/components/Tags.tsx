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
      className="text-primary p-2 bg-background rounded-md ml-2 font-bold hover:bg-primary hover:text-white"
      href={onClick(text)}
    >
      {text}
    </Link>
  );
}
