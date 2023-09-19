import icon_list from '../assets/images/icon-list.svg'
import { useNewsletterContext } from '../context/NewsletterProvider'

const Success = () => {
    const { email } = useNewsletterContext()

    return (
        <div className="flex flex-col justify-start gap-8 bg-white rounded-3xl p-12 w-[30rem]">
            <img src={icon_list} alt="icon_list" className="w-14" />
            <h1 className="text-6xl font-bold text-[#242742]">Thanks for subscribing!</h1>
            <p className="text-base">A confirmation email has been sent to <span className="font-bold">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            <button type="button" className="bg-[#242742] text-white px-6 py-5 border rounded-lg hover:bg-[#ff6257]">Dismiss message</button>
        </div>
    )
}

export default Success