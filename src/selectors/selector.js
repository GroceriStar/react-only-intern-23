import { search } from "@groceristar/groceristar-fetch";
import { chickenKyiv } from "@groceristar/groceristar-fetch";

function getAttribute( name ) {
  return search.getAttribute(name);
}

function getPlaceholder(attribute){
  return search.getPlaceholder(attribute);
}

// @TODO check and maybe we can use ingredients from groceriestar
// right now we grab ingrediennts from ChickenKyiv
// from this method: getIngredients()
function getIngredients(){
  return chickenKyiv.getIngredients3()
}

export { getAttribute, getPlaceholder, getIngredients }
