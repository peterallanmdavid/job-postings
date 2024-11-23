import classNames from "classnames";

export default function Pill({ type = "new!" }: { type: "new!" | "featured" }) {
  return (
    <div
      className={classNames(
        " text-white px-2 py-1 rounded-full ml-2 font-bold text-2xs uppercase",
        type === "new!" ? "bg-primary" : "bg-dark-gray-cyan-2"
      )}
    >
      {type}
    </div>
  );
}
