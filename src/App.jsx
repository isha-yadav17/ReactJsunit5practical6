
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function addProduct(e) {
    e.preventDefault();
    setProducts([...products, { id: Date.now(), name, price }]);
    setName("");
    setPrice("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 p-6 sm:p-10">
      <div className="mx-auto max-w-lg rounded-3xl border-4 border-cyan-300 bg-white p-6 shadow-2xl sm:p-8">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-3xl text-white shadow-lg">
            🛍️
          </div>

          <h1 className="text-3xl font-extrabold text-blue-950">
            Product Management
          </h1>

          <p className="mt-2 font-medium text-gray-500">
            Add and manage your products
          </p>
        </div>

        <form onSubmit={addProduct} className="space-y-5">
          <div>
            <label className="mb-2 block font-bold text-blue-950">
              Product Name
            </label>
            <input
              className="w-full rounded-xl border-2 border-blue-300 bg-blue-50 p-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="mb-2 block font-bold text-blue-950">
              Product Price (₹)
            </label>
            <input
              className="w-full rounded-xl border-2 border-blue-300 bg-blue-50 p-3 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100"
              type="number"
              min="0"
              step="0.01"
              placeholder="Enter product price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl border-2 border-blue-950 bg-blue-700 p-3 font-extrabold text-white shadow-lg transition hover:bg-cyan-600 active:scale-95"
          >
            + Add Product
          </button>
        </form>

        <div className="mt-8 border-t-2 border-blue-200 pt-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-blue-950">
              Product List
            </h2>
            <span className="rounded-full bg-cyan-100 px-4 py-1 font-bold text-blue-900">
              {products.length}
            </span>
          </div>

          {products.length === 0 ? (
            <p className="rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 p-5 text-center font-medium text-gray-500">
              No products added yet.
            </p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="mt-3 flex items-center justify-between gap-3 rounded-xl border-2 border-blue-200 bg-blue-50 p-4 transition hover:border-blue-500 hover:shadow-md"
              >
                <div>
                  <p className="break-words font-extrabold text-blue-950">
                    {product.name}
                  </p>
                  <p className="mt-1 font-semibold text-green-700">
                    Price: ₹{product.price}
                  </p>
                </div>

                <span className="rounded-lg bg-blue-700 px-3 py-2 font-bold text-white">
                  #{products.indexOf(product) + 1}
                </span>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
