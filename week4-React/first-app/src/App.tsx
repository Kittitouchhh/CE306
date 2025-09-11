import Greeting from './components/Greeting'
import WelcomeBanner from './components/WelcomeBanner'

function App() {
  return(
    <div>
      <Greeting name = "Users TypeScript" messageCount={5} />
      <Greeting name = "Dev Vite"  />

      <WelcomeBanner title = "ยินดีต้อนรับเข้าสู่โลก TypeScript!">
        <p>ส่งผ่าน childern props</p>
      </WelcomeBanner>
    </div>
  )
}

export default App;