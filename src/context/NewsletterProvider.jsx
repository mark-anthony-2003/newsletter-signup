/* eslint-disable react/prop-types */
import { createContext, useState, useContext  } from "react"

const NewsletterContext = createContext()

const NewsletterProvider = ({ children }) => {
    const [email, setEmail] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [showSuccess, setShowSuccess] = useState(false)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    const handleEmailChange = (e) => {
        const inputEmail = e.target.value.trim()
        setEmail(inputEmail)

        if (inputEmail.length === 0) {
            setIsValidEmail(true)
        } else {
            setIsValidEmail(emailPattern.test(inputEmail))
        }
    }

    const handleClickSubscribe = () => {
        setShowSuccess(isValidEmail && email.length > 0)
    }

    return (
        <NewsletterContext.Provider
            value={{ email, isValidEmail, handleEmailChange, handleClickSubscribe, showSuccess }}
        >
            { children }
        </NewsletterContext.Provider>
    )
}

export const useNewsletterContext = () => useContext(NewsletterContext)

export default NewsletterProvider