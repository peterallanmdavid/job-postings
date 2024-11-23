import classNames from "classnames";

export default function Pill({ type = "new" }: { type: "new" | "featured" }) {
  return (
    <div
      className={classNames(
        " text-white pl-2 pr-2 pt-1 pb-1 rounded-full ml-2 font-bold text-xs uppercase",
        type === "new" ? "bg-primary" : "bg-secondary"
      )}
    >
      {type}
    </div>
  );
}
