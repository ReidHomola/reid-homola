function Hero() {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="Reid Homola portrait"
                className="img-cover"
              />
            </figure>
            <div>
              <span>
                <span></span>
              </span>
              Available for work
            </div>
          </div>
          <h2>Building Scalable Modern Websites for the Future</h2>
          <div>ButtonPrimary ButtonOutline</div>
        </div>
        <div>
          <figure>
            <img
              src="/images/hero-banner.png"
              width={656}
              height={800}
              alt="Reid Homola"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
