import NewsletterProvider from './context/NewsletterProvider'
import Main from './layouts/Main'

const App = () => {
  return (
    <NewsletterProvider>
      <div className="flex justify-center items-center min-h-screen bg-[#242742]">
        <Main />
      </div>
    </NewsletterProvider>
  )
}

export default App