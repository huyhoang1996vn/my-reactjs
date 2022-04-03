export function addItemAction(name) {
    console.log("==== addItemAction ", name)
    return { 
      type: 'INCREMENT', 
      data: name 
    }
  }


export default addItemAction;
