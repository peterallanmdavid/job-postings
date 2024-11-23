import classNames from "classnames";

export default function Card({
  children,
  highligted,
  offSetTop,
}: {
  children: React.ReactNode;
  highligted?: boolean;
  offSetTop?: boolean;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col md:flex-row relative bg-white rounded-lg shadow-md p-4 md:items-center items-start justify-between  md:mb-10 mb-14 gap-4",
        highligted ? "border-l-4 border-primary" : "",
        offSetTop && "-mt-16"
      )}
    >
      {children}
    </div>
  );
}
