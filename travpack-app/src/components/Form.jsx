/* eslint-disable react/prop-types */
export default function Form ( { handleSubmit, scrollToRef, formData, updateData, editIndex }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="">
          <h1 ref={scrollToRef} className="text-lg font-medium">
            What do you need for this trip?
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mt-5 sm:flex-row sm:gap-1"
        >
          <div className="flex gap-2">
            <select
              name="quantity"
              value={formData.quantity}
              onChange={updateData}
              className="p-2 rounded border md:px-4"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num, index) => {
                return (
                  <option key={index} value={num}>
                    {num}
                  </option>
                );
              })}
            </select>
            <input
              className="border p-2 rounded md:w-[15rem] lg:w-[20rem]"
              type="text"
              name="item"
              value={formData.item}
              placeholder="Enter Item..."
              onChange={updateData}
              required
            />
          </div>
          <button className="w-fit self-center bg-orange-900 text-white p-2 px-6 border rounded cursor-pointer md:px-8 lg:px-10">
            {editIndex === -1 ? "Add" : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}