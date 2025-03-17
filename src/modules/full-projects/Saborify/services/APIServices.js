import api from './../lib/axios'

export default {
  getRecipes(ingredients) {
    return api.get(`/recipes/list?from=0&size=100&q=${ingredients}`)
  },

  getRecipeByID(id) {
    const url = `recipes/get-more-info?id=${id}`
    return api.get(url)
  }
}
