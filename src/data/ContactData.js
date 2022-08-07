import {FaPhoneAlt} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'

export const ContactFormData = [
    {
        placeholder: 'Name',
        type: 'text',
    },
    {
        placeholder: 'Surname',
        type: 'text',
    },
    {
        placeholder: 'Your Email',
        type: 'email',
    },
    {
        placeholder: 'Your Website URL',
        type: 'url',
    },
]

export const ContactInfoData = [
    {
        icon: <FaPhoneAlt />, 
        details: ['010-020-0340', '090-080-0760']
    },
    {
        icon: <FaEnvelope />, 
        details: ['info@onixdigital.com', 'mail@onixdigital.com']
    },
]