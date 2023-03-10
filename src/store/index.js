const redux = require('redux');
const store = redux.legacy_createStore(cartRedux);

function cartRedux(state = { allItems: [], cart: { items: [], totalPrice: 0 } }, action) {

    if (action.type === 'ALL') {
        const updatedItems = { ...state, allItems: [...action.items] }

        return updatedItems;

    }
    if (action.type === 'ADD') {
        const currentItemIndex = state.cart.items.findIndex(elem => elem.name === action.item.name);

        let currentItem = state.cart.items[currentItemIndex];

        let updatedItems;

        if (currentItem) {
            updatedItems = {
                ...state,
                cart: { ...state.cart }

            };
            updatedItems.cart.items[currentItemIndex].amount += 1;
        } else {
            updatedItems = {
                ...state,
                cart: { ...state.cart, items: [...state.cart.items, { ...action.item, amount: 1 }] }
            };

        }

        updatedItems.cart.totalPrice = updatedItems.cart.items.reduce((a, b) => a + b.price * b.amount, 0);
        localStorage.setItem('checkout', true);
        const storageCart = JSON.stringify(updatedItems.cart);
        localStorage.setItem('cart', storageCart);

        return updatedItems;
    }

    if (action.type === 'MINUS') {
        const currentItemIndex = state.cart.items.findIndex(elem => elem.id === action.id);
        let currentItem = state.cart.items[currentItemIndex];

        let updatedItems;

        if (currentItem.amount > 1) {
            updatedItems = {
                ...state,
                cart: { ...state.cart }
            };
            updatedItems.cart.items[currentItemIndex] = {
                ...currentItem,
                amount: updatedItems.cart.items[currentItemIndex].amount - 1
            };
        } else {
            updatedItems = {
                ...state,
                cart: {
                    ...state.cart,
                    items: state.cart.items.filter(product => product.name !== currentItem.name)
                }
            }
        }
        updatedItems.cart.totalPrice = updatedItems.cart.items.reduce((a, b) => a + b.price * b.amount, 0);

        if (updatedItems.cart.totalPrice === 0) {
            localStorage.setItem('checkout', false);
        }
        const storageCart = JSON.stringify(updatedItems.cart);
        localStorage.setItem('cart', storageCart);
        return updatedItems;
    }
    if (action.type === 'REMOVE') {
        const currentItemIndex = state.cart.items.findIndex(elem => elem.id === action.id);
        let currentItem = state.cart.items[currentItemIndex];

        let updatedItems = {
            ...state,
            cart: {
                ...state.cart,
                items: state.cart.items.filter(product => product.name !== currentItem.name)
            }
        };
        updatedItems.cart.totalPrice = updatedItems.cart.items.reduce((a, b) => a + b.price * b.amount, 0);
        if (updatedItems.cart.totalPrice === 0) {
            localStorage.setItem('checkout', false);
        }
        const storageCart = JSON.stringify(updatedItems.cart);
        localStorage.setItem('cart', storageCart);

        return updatedItems;
    }
    if (action.type === 'STORAGE') {
        const storageCart = JSON.parse(localStorage.getItem('cart'));
        if (storageCart) {
            const updatedItems = {
                ...state,
                cart: storageCart
            }
            updatedItems.cart.totalPrice > 0 ? localStorage.setItem('checkout', true) : localStorage.setItem('checkout', false);
            return updatedItems;
            
        } else {
            localStorage.setItem('checkout', false);
            return state;

        }



    }



    return state;
}

export default store;
