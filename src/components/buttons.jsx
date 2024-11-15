/* eslint-disable react/prop-types */
export default function Buttons({ onAdd, onRemoveAll }) {
  return (
    <>
      <section>
        <div className="mt-9 flex justify-center gap-16">
          <button
            onClick={onAdd}
            className="bg-indigo-900 px-3 py-1 w-[160px] rounded"
          >
            Add
          </button>
          <button
            onClick={onRemoveAll}
            className="bg-red-900 px-3 py-1 w-[160px] rounded"
          >
            Remove All
          </button>
        </div>
      </section>
    </>
  );
}
