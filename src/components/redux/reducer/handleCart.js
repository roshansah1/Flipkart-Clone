
const cart = []

const handleCart = (state = cart, action) => {
     const product = action.payload
     switch(action.type){
        case "ADDITEM" : 
        //check if product is already exists
        //console.log("state", state)
        console.log("product", product)
        const exist = state.find((x) => x.id === product.id )
        if(exist){
            //Increase the quantity
          
            return state.map((x) => (x.id === product.id) ? ({...x, qty : x.qty + 1, price:Number(x.price+ x.fixedPrice)}) : (x))  
        }else{
            const product = action.payload
            return [
                ...state,
                {
                    ...product,
                    qty : 1,
                    fixedPrice : product.price,
                }
            ]
        }
        break;
        
        case "DELITEM" :
            const exist1 = state.find((x) => x.id === product.id)
            if(exist1 === 1){
                return state.filter((x) => x.id !== exist1.id)
            }
                else{
                    return state.map((x) => x.id === product.id ? 
                    {...x, qty: x.qty-1, price: x.price-x.fixedPrice} : x )
                }
                break;

            case "REMITEM" :
                return state.filter(ele => ele.id !== product.id)
              break;

              case "TOTALPRICE" :
                let totalPrice = state.reduce((initialVal, currElem) => {
                    let {price} = currElem

                    initialVal = initialVal + price
                    return initialVal
                },0)

                return {
                    ...state,
                    totalPrice
                }
               
                
               break;
                default :
                 return state;
                break;
            }
           
     }     


export default handleCart