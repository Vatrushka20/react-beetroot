import './Main.scss'
import Blog from "../Blog/Blog";
import News from "../News/News";

function Main() {
    return (
      <main className='main'>
              <Blog />
              <News />
      </main>
    )
}

export default Main;