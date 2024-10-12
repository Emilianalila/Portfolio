const Home = () => {
  return (
    <section id="home" className="theme-light">
      <div className="wrapper flex ">
        <main>
          <h1 className="text-7xl text-blue-800">Hi, I am Emiliana</h1>
          <h2 className="text-5xl text-blue-400">Full-Stack developer</h2>
          <p className="text-2xl text-blue-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro mollitia dignissimos tempore tempora necessitatibus qui. Repudiandae consequatur soluta magni et repellat illo eos nisi libero. Autem nihil atque repellendus? Cupiditate.</p>
          <div className="flex"> 
            <a href="https://github.com/Emilianalila" target="_blank"><img src="./src/assets/github.svg" className="w-10 h-auto" alt="github-icom" /></a>
            <a href="https://www.linkedin.com/in/emiliana-e-971b26202/" target="_blank"><img src="./src/assets/linkedin.svg" className="w-10 h-auto" alt="linkedin-icom" /></a>
            <a href="mailto:emilianalila@gmail.com" target="_blank"><img src="./src/assets/gmail.svg" className="w-10 h-auto" alt="gmail-icom" /></a>
          </div>
          <a href="./src/assets/Emiliana.resume.pdf" target="_blank">Resume</a>
        </main>
        <aside >
         <img src="./src/assets/webdev.svg" alt="Developer" />
        </aside>
      </div>
    </section>
  )
}

export default Home;