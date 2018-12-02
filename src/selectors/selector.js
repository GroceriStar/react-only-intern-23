import { search } from "@groceristar/groceristar-fetch";

function getAttribute( name ) {
  return search.getAttribute(name);
}

function getPlaceholder(attribute){
  return search.getPlaceholder(attribute);
}

// @TODO check and maybe we can use ingredients from groceriestar
// from this method: getIngredients()
function getIngredients1(){
  return [];
}

export { getAttribute, getPlaceholder, getIngredients1}
