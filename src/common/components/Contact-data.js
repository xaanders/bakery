
const menuItems = [
    { navTitle: 'Home', url: '/home', id: '1' },
    { navTitle: 'About us', url: '/about', id: '2' },
    { navTitle: 'Store', url: '/store', id: '3' },
    { navTitle: 'Contacts', url: '/contacts', id: '4' }
];

const hours = [
    { day: "Fri", fullDay: 'Friday', time: "10am - 7pm", id: '5' },
    { day: "Sat", fullDay: 'Saturday', time: "10am - 3pm", id: '6' },
    { day: "Sun", fullDay: 'Sunday', time: "10am - 2pm", id: '7' }
];
const gInT = [
    { icon: '/assets/icons/contact/location.svg', contactIcon: '/assets/icons/contact/contact-location.svg', body: 'Bloor Street West 4573', id: 'loc' },
    { icon: '/assets/icons/contact/phone.svg', contactIcon: '/assets/icons/contact/contact-phone.svg', body: '+1 (647)294 5838', id: 'phone' },
    { icon: '/assets/icons/contact/mail.svg', contactIcon: '/assets/icons/contact/contact-mail.svg', body: 'hello@valeria-bakery.com', id: 'mail' }
]

export {menuItems, hours, gInT }