import useCartStore from "../store/cartStore"
import useProductStore from "../store/productStore"
import { useState } from "react"
import placeholder from "../assets/images/placeholder.png"
import productSchema from "../validation/produktSchema"

function ProductCard({ product, isAdmin }) {
  const deleteProduct = useProductStore((state) => state.deleteProduct)
  const updateProduct = useProductStore((state) => state.updateProduct)
  const addToCart = useCartStore((state) => state.addToCart)

  const [isEditing, setIsEditing] = useState(false)

  const [editedName, setEditedName] = useState(product.name)
  const [editedDescription, setEditedDescription] = useState(product.description)
  const [editedPrice, setEditedPrice] = useState(product.price)
  const [editedImage, setEditedImage] = useState(product.image || "")
  const [error, setError] = useState("")

  return (
    <article className="product-card">
      <img
        src={product.image || placeholder}
        alt={product.name}
      />

      {isEditing ? (
        <div>
          {error && <p className="error-message">{error}</p>}

          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />

          <input
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />

          <input
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />

          <input
            value={editedImage}
            onChange={(e) => setEditedImage(e.target.value)}
            placeholder="Bild-url"
          />

          <button
            className="save-card-button"
            onClick={() => {
              const productToValidate = {
                name: editedName,
                description: editedDescription,
                price: Number(editedPrice),
                image: editedImage,
              }

              const validation = productSchema.validate(productToValidate)

              if (validation.error) {
                setError(validation.error.details[0].message)
                return
              }

              setError("")

              updateProduct({
                ...product,
                ...productToValidate,
              })

              setIsEditing(false)
            }}
          >
            Spara
          </button>
        </div>
      ) : (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong>{product.price} kr</strong>
        </div>
      )}

      {isAdmin ? (
        <>
          <button
            className="edit-card-button"
            onClick={() => setIsEditing(true)}
          >
            Ändra
          </button>

          <button
            className="remove-card-button"
            onClick={() => deleteProduct(product.id)}
          >
            Ta bort
          </button>
        </>
      ) : (
        <button
          className="add-card-button"
          onClick={() => addToCart(product)}
        >
          Lägg till
        </button>
      )}
    </article>
  )
}

export default ProductCard