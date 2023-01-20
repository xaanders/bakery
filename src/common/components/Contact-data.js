import instSvg from '../../assets/icons/social/footer-social/inst.svg'
import fbSvg from '../../assets/icons/social/footer-social/fb.svg'
import locIcon from '../../assets/icons/contact/location.svg'
import phoneIcon from '../../assets/icons/contact/phone.svg'
import mailIcon from '../../assets/icons/contact/mail.svg'
import locContactIcon from '../../assets/icons/contact/contact-location.svg'
import phoneContactIcon from '../../assets/icons/contact/contact-phone.svg'
import mailContactIcon from '../../assets/icons/contact/contact-mail.svg'
import logoLight from '../../assets/icons/bakery-logo-light.svg'

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
    { icon: locIcon, contactIcon: locContactIcon, body: 'Bloor Street West 4573', id: 'loc' },
    { icon: phoneIcon, contactIcon: phoneContactIcon, body: '+1 (647)294 5838', id: 'phone' },
    { icon: mailIcon, contactIcon: mailContactIcon, body: 'hello@valeria-bakery.com', id: 'mail' }
]

export {menuItems, hours, gInT, instSvg, fbSvg, logoLight}