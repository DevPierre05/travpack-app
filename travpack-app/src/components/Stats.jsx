/* eslint-disable react/prop-types */
export default function Stats ({ items }) {
  const itemsPacked = items.filter((item) => item.isDone === true).length;
  const percentage = Math.round((itemsPacked * 100) / items.length)
  return (
    <footer className="w-full mt-10 fixed bottom-0 left-0 text-center italic bg-slate-300">
      {items.length > 0 && (
        <p>
          {items.length === itemsPacked
            ? "You have everything. Ready to go ✈"
            : `You have ${items.length} items on your list. You have already packed ${itemsPacked} (${percentage}%)`}
        </p>
      )}
    </footer>
  );
}