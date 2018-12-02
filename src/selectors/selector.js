import { search } from "@groceristar/groceristar-fetch";

function getAttribute( name ) {
  return search.getAttribute(name);
}

function getPlaceholder(attribute){
  return search.getPlaceholder(attribute);
}

function getIngredients1(){
  return [];
}

export { getAttribute, getPlaceholder, getIngredients1}
