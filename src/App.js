import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

          <header id="header">
				<div className="logo"><a href="index.html">Road Trip <span>by TEMPLATED</span></a></div>
				<a href="#menu"><span>Menu</span></a>
			</header>

		
			<nav id="menu">
				<ul className="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="generic.html">Generic</a></li>
					<li><a href="index.html">Elements</a></li>
				</ul>
			</nav>

		
			<section id="banner" className="bg-img" data-bg="banner.jpg">
				<div className="inner">
					<header>
						<h1>This is Road Trip</h1>
					</header>
				</div>
				<a href="#one" class="more">Learn More</a>
			</section>

		
			<section id="one" className="wrapper post bg-img" data-bg="banner2.jpg">
				<div className="inner">
					<article className="box">
						<header>
							<h2>Nibh non lobortis mus nibh</h2>
							<p>01.11.2017</p>
						</header>
						<div className="content">
							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
						</div>
						<footer>
							<a href="generic.html" className="button alt">Learn More</a>
						</footer>
					</article>
				</div>
				<a href="#two" className="more">Learn More</a>
			</section>

		
			<section id="two" className="wrapper post bg-img" data-bg="banner5.jpg">
				<div className="inner">
					<article className="box">
						<header>
							<h2>Mus elit a ultricies at</h2>
							<p>12.21.2017</p>
						</header>
						<div className="content">
							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
						</div>
						<footer>
							<a href="generic.html" class="button alt">Learn More</a>
						</footer>
					</article>
				</div>
				<a href="#three" className="more">Learn More</a>
			</section>

		
			<section id="three" className="wrapper post bg-img" data-bg="banner4.jpg">
				<div className="inner">
					<article className="box">
						<header>
							<h2>Varius a cursus aliquet</h2>
							<p>11.11.2017</p>
						</header>
						<div className="content">
							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
						</div>
						<footer>
							<a href="generic.html" className="button alt">Learn More</a>
						</footer>
					</article>
				</div>
				<a href="#four" className="more">Learn More</a>
			</section>

	
			<section id="four" className="wrapper post bg-img" data-bg="banner3.jpg">
				<div className="inner">
					<article className="box">
						<header>
							<h2>Luctus blandit mi lectus in nascetur</h2>
							<p>10.30.2017</p>
						</header>
						<div className="content">
							<p>Scelerisque enim mi curae erat ultricies lobortis donec velit in per cum consectetur purus a enim platea vestibulum lacinia et elit ante scelerisque vestibulum. At urna condimentum sed vulputate a duis in senectus ullamcorper lacus cubilia consectetur odio proin sociosqu a parturient nam ac blandit praesent aptent. Eros dignissim mus mauris a natoque ad suspendisse nulla a urna in tincidunt tristique enim arcu litora scelerisque eros suspendisse.</p>
						</div>
						<footer>
							<a href="generic.html" className="button alt">Learn More</a>
						</footer>
					</article>
				</div>
			</section>

			<footer id="footer">
				<div className="inner">

					<h2>Contact Me</h2>

					<form action="#" method="post">

						<div className="field half first">
							<label for="name">Name</label>
							<input name="name" id="name" type="text" placeholder="Name" />
						</div>
						<div className="field half">
							<label for="email">Email</label>
							<input name="email" id="email" type="email" placeholder="Email" />
						</div>
						<div className="field">
							<label for="message">Message</label>
							<textarea name="message" id="message" rows="6" placeholder="Message"></textarea>
						</div>
						<ul className="actions">
							<li><input value="Send Message" className="button alt" type="submit" /></li>
						</ul>
					</form>

					<ul className="icons">
						<li><a href="#" className="icon round fa-twitter"><span class="label">Twitter</span></a></li>
						<li><a href="#" className="icon round fa-facebook"><span class="label">Facebook</span></a></li>
						<li><a href="#" className="icon round fa-instagram"><span class="label">Instagram</span></a></li>
					</ul>

					<div className="copyright">
						&copy; 2017 Reserved.
					</div>

				</div>
			</footer>

               

      </div>
    );
  }
}

export default App;
