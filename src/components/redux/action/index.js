export const addCart = (product) => {
      return {
        type: "ADDITEM",
        payload: product
      }
}


export const delCart = (product) => {
    return {
      type: "DELITEM",
      payload: product
    }
}

export const remCart = (product) => {
  return {
    type: "REMITEM",
    payload: product
  }
}


export const totalPrice = (product) => {
  return {
    type: "TOTALPRICE",
    payload: product
  }
}