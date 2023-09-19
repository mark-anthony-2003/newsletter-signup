import { useNewsletterContext } from '../context/NewsletterProvider'
import SignUp from '../components/SignUp'
import Success from '../components/Success'

const Main = () => {
    const { showSuccess } = useNewsletterContext()

    return (
        <>
            { showSuccess ? <Success /> :  <SignUp /> }
        </>
    )
}

export default Main