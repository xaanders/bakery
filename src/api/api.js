
export default async function getAllItems(reduxDispatch) {
    const response = await fetch('/db.json');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Could not get items.');
    }
  
    const items = [];
  
    for (const key in data.items) {
      const productObj = {
        ...data.items[key],
        id: key
      };
      
      items.push(productObj);
    }
    reduxDispatch({type: "ALL", items: items})
  }


  
export function addCartHandler(dispatch, item) {
  const newItem = {
      name: item.name,
      price: item.price,
      img: item.img,
      id: item.id
  }

  dispatch({ type: "ADD", item: newItem })
}

