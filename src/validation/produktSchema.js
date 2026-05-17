import Joi from "joi"

const productSchema = Joi.object({
  name: Joi.string().min(2).required().messages({
    "string.empty": "Namn måste fyllas i",
    "string.min": "Namn måste vara minst 2 tecken",
  }),

  description: Joi.string().min(10).required().messages({
    "string.empty": "Beskrivning måste fyllas i",
    "string.min": "Beskrivning måste vara minst 10 tecken",
  }),

  price: Joi.number().min(1).required().messages({
    "number.base": "Pris måste vara ett nummer",
    "number.min": "Pris måste vara minst 1 kr",
  }),

  image: Joi.string().allow("").messages({
    "string.base": "Bild måste vara text",
  }),
})

export default productSchema