import { useNewsletterContext } from '../context/NewsletterProvider'
import illustration from '../assets/images/illustration-sign-up-desktop.svg'
import icon_list from '../assets/images/icon-list.svg'


const SignUp = () => {
    const { email, isValidEmail, handleEmailChange, handleClickSubscribe } = useNewsletterContext()

    const lists = [
        "Product discovery and building what matters",
        "Measuring to ensure updates are a success",
        "And much more!"
    ]

    return (
        <div className="grid grid-cols-2 bg-white rounded-3xl p-5">

            <div className="col-span-1 flex flex-col justify-center gap-5 p-8">
                <h1 className="text-6xl font-bold text-[#242742]">Stay updated!</h1>
                <p className="text-base">Join 60,000+ product managers receiving monthly updates on:</p>
                { lists.map((list, listIndex) => (
                    <div key={listIndex} className="flex justify-start items-center gap-3">
                        <img src={icon_list} alt="icon_list" />
                        <p>{list}</p>
                    </div>
                ))}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <div className="grid grid-cols-2">
                            <label htmlFor="email" className="text-sm font-bold">Email address</label>
                            { !isValidEmail && <p className="text-sm font-bold text-[#ff6257] text-end">Valid email required</p> }
                        </div>
                        <input
                            type="email" id="email" placeholder="email@company.com"
                            className={`
                                ${ !isValidEmail && email.length > 0 && "border-[#ff6257] text-[#ff6257] bg-[#fae0de]" }
                                w-full px-6 py-5 border rounded-lg focus:outline-none
                            `}
                            value={email} onChange={handleEmailChange}
                        />
                    </div>
                    <button type="button" onClick={handleClickSubscribe} className="bg-[#242742] text-white px-6 py-5 border rounded-lg">Subscribe to monthly newsletter</button>
                </div>
            </div>

            <div className="col-span-1 flex justify-end">
                <img src={illustration} alt="illustration" />
            </div>

        </div>
    )
}

export default SignUp