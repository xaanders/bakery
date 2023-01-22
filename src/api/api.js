
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
    return items;
  }