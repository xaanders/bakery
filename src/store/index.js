const redux = require('redux');
const store = redux.legacy_createStore(cartRedux);

function cartRedux(state = { allItems: [], cart: {items: [], totalPrice: 0 }}, action) {
    if (action.type === 'ALL') {
        const newItems = [...action.items];
        return {...state, allItems: newItems};

    }
    // if (action.type === 'ADD') {
    //     const currentItemIndex = state.cart.findIndex(elem => elem.name === action.item.name);

    //     let currentItem = state.cart[currentItemIndex];

    //     let updatedItems;

    //     if (currentItem) {
    //         updatedItems = {
    //             ...state
    //         };

    //         updatedItems.cart[currentItemIndex].amount += 1;
    //     } else {
    //         updatedItems = {
    //             ...state,
    //             cart: [...state.cart, { ...action.item, amount: 1 }]
    //         };
    //     }
    //     return updatedItems;
    // }

    // if (action.type === 'REMOVE') {
    //     const currentItemIndex = state.cart.findIndex(elem => elem.id === action.item.id);
    //     let currentItem = state.cart[currentItemIndex];

    //     let updatedItems;

    //     if (currentItem.amount > 1) {
    //         updatedItems = {
    //             ...state
    //         };
    //         updatedItems.cart[currentItemIndex] = {
    //             ...currentItem,
    //             amount: updatedItems.cart[currentItemIndex].amount - 1
    //         };
    //     } else {
    //         updatedItems = {
    //             ...state,
    //             cart: state.cart.filter(product => product.name !== currentItem.name)
    //         };
    //     }
    //     return updatedItems;
    // }

    // if (action.type === "TOTAL") {
    //     return { ...state, totalPrice: action.total };
    // }
    
    // if(action.type === "CLEAN") {
    //     return  { cart: [], orders: [], totalPrice: 0 };
    // }

    return state;
}

export default store;
