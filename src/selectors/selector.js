import { search } from "@groceristar/groceristar-fetch";
import { groceristar } from "@groceristar/groceristar-fetch";

function getAttribute( name ) {
  return search.getAttribute(name);
}

function getPlaceholder(attribute){
  return search.getPlaceholder(attribute);
}


function getIngredients(){
  return groceristar.getIngredients()
}

export { getAttribute, getPlaceholder, getIngredients }
