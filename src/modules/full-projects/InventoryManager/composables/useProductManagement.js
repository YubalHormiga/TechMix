import { ref, reactive, watch, onMounted, inject } from 'vue'
import { db } from '../data/products'

export function useProductManagement() {
  const products = ref([])
  const selectedProductState = reactive({})
  const productState = reactive({})
  const toast = inject('toast')

  onMounted(() => {
    const productsStorage = localStorage.getItem('products')
    if (productsStorage) {
      try {
        products.value = JSON.parse(productsStorage)
      } catch (e) {
        console.error('Error parsing products from localStorage', e)
        products.value = []
      }
    } else {
      products.value = []
    }
  })

  const saveProductsToLocalStorage = () => {
    try {
      localStorage.setItem('products', JSON.stringify(products.value))
    } catch (e) {
      console.error('Error saving products to localStorage', e)
    }
  }

  watch(
    () => products.value,
    () => saveProductsToLocalStorage(),
    { deep: true }
  )

  const calculatePrices = (product) => {
    product.quantity = product.lots.reduce((sum, lot) => sum + lot.quantity, 0)
    const totalCost = product.lots.reduce((sum, lot) => sum + lot.purchasePrice * lot.quantity, 0)
    product.purchasePrice = parseFloat((totalCost / product.quantity).toFixed(2))
    product.salePrice = parseFloat(
      (product.purchasePrice * (1 + product.profitMargin / 100)).toFixed(2)
    )
  }

  const submitProduct = (product) => {
    const existProduct = products.value.findIndex((item) => item.name === product.name)
    const selectedCategory = db.find((cat) => cat.name === product.category)
    const selectedItem = selectedCategory?.items.find((item) => item.name === product.name)

    if (existProduct >= 0) {
      const existingProduct = products.value[existProduct]
      const existingLotIndex = existingProduct.lots.findIndex((lot) => lot.lotId === product.lotId)

      if (existingLotIndex >= 0) {
        Object.assign(existingProduct.lots[existingLotIndex], product)
        calculatePrices(existingProduct)
        toast.open({
          message: 'Artículo modificado correctamente',
          type: 'success'
        })
        return
      }

      const newLot = {
        ...product,
        description: selectedItem?.description || 'Descripción no encontrada',
        image: selectedItem?.image || 'Imagen no encontrada',
        lotId: crypto.randomUUID(),
        createdAt: new Date().toISOString()
      }
      existingProduct.lots.push(newLot)
      calculatePrices(existingProduct)
      toast.open({
        message: 'Artículo ingresado correctamente',
        type: 'success'
      })
    } else {
      const newProduct = {
        ...product,
        description: selectedItem?.description || 'Descripción no encontrada',
        image: selectedItem?.image || 'Imagen no encontrada',
        id: crypto.randomUUID(),
        quantity: product.quantity,
        lots: [
          {
            ...product,
            lotId: crypto.randomUUID(),
            createdAt: new Date().toISOString()
          }
        ]
      }
      products.value.push(newProduct)
      toast.open({
        message: 'Artículo ingresado correctamente',
        type: 'success'
      })
    }
  }

  const selectedProduct = (id) => {
    const product = products.value.find((item) => item.id === id) || {}
    Object.assign(selectedProductState, product)
  }

  const editProduct = (id) => {
    const productToEdit = products.value.find((item) => item.id === id)
    if (productToEdit) {
      const lastLot = productToEdit.lots[productToEdit.lots.length - 1] || {}
      Object.assign(productState, lastLot)
    }
  }

  const deleteProduct = (id) => {
    products.value = products.value.filter((product) => product.id !== id)

    toast.open({
      message: 'Producto eliminado correctamente',
      type: 'warning'
    })
  }

  return {
    products,
    selectedProductState,
    productState,
    submitProduct,
    selectedProduct,
    editProduct,
    deleteProduct
  }
}
