<template>
  <div id="app">
    <div class="App" style="background-color: rgb(241, 241, 241)">
				<section class="hero is-large">
			  <div class="hero-head"  style="background-color: white">
			  <header class="navbar" style="height: 20px, position: fixed, right: 10px, margin-top: 20px">
			      <div class="container">
			        <div class="navbar-brand">
			          <div role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false" is-active="false">
			            <span aria-hidden="true"></span>
			            <span aria-hidden="true"></span>
			            <span aria-hidden="true"></span>
			          </div>
			        </div>
			        <div id="navMenu" class="navbar-menu">
			          <div class="navbar-end">
								<span class="navbar-item">
									<button class="button is-danger modal-button" data-target="modal-stack" aria-haspopup="true">
									<span class="icon">
										<i class="fab fa-react" ></i>
										</span>
										<span >Stack</span>
									</button>
								</span>
			            <span class="navbar-item">
			              <a class="button is-success" href="files/JordanGamacheResume.pdf" download>
											<span class="icon">
												<i class="fa fa-file"></i>
											</span>
											<span>Resume</span>
			              </a>
			            </span>
									<span class="navbar-item">
										<a class="button is-link" href="https://www.linkedin.com/in/jordan-gamache-374417165">
											<span class="icon">
												<i class="fa fa-linkedin" ></i>
											</span>
											<span>LinkedIn</span>
										</a>
									</span>
			            <span class="navbar-item">
			              <a class="button is-black" href="https://github.com/scotch115">
			                <span class="icon">
			                  <i class="fa fa-github"></i>
			                </span>
											<span>GitHub</span>
			              </a>
			            </span>
			          </div>
			        </div>
			      </div>
			    </header>
			   </div>
				 <div class="modal" id="modal-stack">
				 	<div class="modal-background"></div>
					<div class="modal-card">
						<header class="modal-card-head">
							<p class="modal-card-title">FERN Stack</p>
							<button class="delete" aria-label="close" data-target="modal-stack"></button>
						</header>
						<section class="modal-card-body">
							<p class="title">This website is built on the FERN stack.</p>
							<p> FERN is an acronym for a Full Stack (or all inclusive) method of web development. In particular, the FERN stack incorporates some of the most popular frameworks and tools to accompany traditional web development techniques. FERN uses Firebase, Express.js, React.js, and Node.js. These allow the site to be flexible, responsive, lightweight, and yet still powerful and precise. The FERN stack is my personal favorite and most comfortable method for building Web Apps like this one, however I have some familiarity with the MERN (MongoDB/Express/React/Node) stack as well.</p>
						</section>
					</div>
				 </div>
			   <header id="header" style="background-color: white, height: 500px">
			    <div class="container has-text-centered">
					<div id="spacer"> </div>
			      <div class="title">
			        <img class="JGlogo" id="logo" src="./assets/JGlogo.png" alt="logo" width="170" height="190"/>
			      </div>
			      <p class="subtitle" id="subtitle">
			        <strong> Jordan Gamache </strong>
			      </p>
			    </div>
			   </header>
				 <div style="height: 10vh"></div>
				 <div class="container">
			    <div class="tile is-ancestor">
			      <div class="tile is-vertical is-6 is-parent">
			        <article class="tile is-child box" id="card1">
			        <p class="title">Hi there! <span role="img" aria-label="wave">👋🏻</span></p>
							<img src="./assets/hello.png" alt="hello" style="position: relative, float: right, top: 0, height: 250px">
							<p>
			        	I'm Jordan Gamache, a freelance web developer with a passion for front end UI/UX and JavaScript frameworks.
							</p>
							</article>
			        <article class="tile is-child box" id="card2">
			          <p class="title">Experience</p>
								<img src="./assets/wireframe.png" alt="wireframe" style="position: relative, float: right, top: 0, height: 200px">
								<div class="has-text-centered" style="padding: 10px"></div>
			          I am a Senior at the University of Central Florida studying Interdisciplinary Studies in Computational Science and Commerce, with a Minor in National Intelligence and Security. I am beginning to work as a freelance web developer, looking to bring businesses a beautiful, clean website to reach more customers, and keep them. Check out my resumé or send me an email and let's talk!
			        </article>
							</div>
							<div class="tile is-6 is-vertical is-parent">
			        <article class="tile is-child box" id="card3">
			          <p class="title">Languages</p>
								<img src="./assets/web_app.png" alt="webApp" style="position: relative, top: 0, height: 200px, float: right">
								<div class="has-text-centered" style="padding: 10px"></div>
			          HTML, CSS, JavaScript, Swift, C, Java, Dart
			        </article>
			        <article class="tile is-child box" id="card4">
			          <p class="title">Development Tools</p>
								<img src="./assets/developer.png" alt="developer" style="position: relative, top: 0, height: 200px, float: right">
								<div class="has-text-centered" style="padding: 10px"></div>
			          Atom, GitHub, Node, Express, Firebase, Flutter, Visual Studio Code, Travis, React, Working Copy (on iOS), Xcode, Bulma, Terminal
			        </article>
		        	</div>
						</div>
						<div style="padding: 40px"></div>
						<div class="tile is-child">
							<article class="tile is-child container box" id="card">
							<p class="title">Projects</p>
								<div class="columns is-multiline">
								<div class="column"><HelloWorld title="Snowcap Coffee" link="https://snowcap-coffee.web.app" img="snowcap.png"></HelloWorld></div>
									<div class="column"><HelloWorld title="Simply Boba" link="https://simply-boba.web.app" img="simply-sc.png" ></HelloWorld></div>
									<div class="column"><HelloWorld title="Trek Noise" link="https://trek-noise.web.app" img="treknoise.png"></HelloWorld></div>
									<div class="column"><HelloWorld title="Daily - To-Do App" link="https://showcase-daily.web.app" img="showcase-sc.png"></HelloWorld></div>
									<div class="column"><HelloWorld title="Munch - Restaurant App" link="https://munchshowcase.web.app" img="munch.png"></HelloWorld></div>
									<div class="column"><HelloWorld title="Tom Gamache Books" link="https://tomgamachebooks.web.app" img="tg.png"></HelloWorld></div>
								</div>
							</article>
						</div>
						<div style="padding: 5vh"></div>
				 </div>
				 <div class="section-body">
					 <form class="container box" action="https://usebasin.com/f/88688e738fdc" method="POST">
					 	<div class="title">
					 		Want to work together?
					 	</div>
						  <div class="field is-horizontal">
						  <div class="field-label is-normal">
						    <label class="label">From</label>
						  </div>
						  <div class="field-body">
						    <div class="field">
						      <p class="control is-expanded has-icons-left">
						        <input class="input" name="name" type="text" placeholder="Name" />
						        <span class="icon is-small is-left">
						          <i class="fa fa-user"></i>
						        </span>
						      </p>
						    </div>
						    <div class="field">
						      <p class="control is-expanded has-icons-left has-icons-right">
						        <input class="input is-link" type="email" name="email" placeholder="Email" />
						        <span class="icon is-small is-left">
						          <i class="fa fa-envelope"></i>
						        </span>
						        <span class="icon is-small is-right">
						          <i class="fa fa-check"></i>
						        </span>
						      </p>
						    </div>
						  </div>
						</div>

						<div class="field is-horizontal">
						  <div class="field-label is-normal">
						    <label class="label">Subject</label>
						  </div>
						  <div class="field-body">
						    <div class="field">
						      <div class="control">
						        <input class="input " type="text" name="subject" placeholder="e.g. Website Redesign Request" />
						      </div>
						    </div>
						  </div>
						</div>

						<div class="field is-horizontal">
						  <div class="field-label is-normal">
						    <label class="label">Message</label>
						  </div>
						  <div class="field-body">
						    <div class="field">
						      <div class="control">
						        <textarea class="textarea" name="message" placeholder="Explain how we can help you"></textarea>
										<p class="help">
							        *This field is required
							      </p>
						      </div>
						    </div>
						  </div>
						</div>

						<div class="field is-horizontal">
						  <div class="field-label">
						  </div>
						  <div class="field-body">
						    <div class="field">
						      <div class="control">
						        <button type="submit" class="button is-link">
						          Send message
						        </button>
						      </div>
						    </div>
						  </div>
						</div>
					 </form>
				</div>
				<div style="height: 10vh"></div>
			   <footer class="hero-foot">
			    <div class="content has-text-centered">
			     Made with <i class="fa fa-heart" style="color: rgb(235, 43, 86)"></i> & <i class="fa fa-coffee" style="color: rgb(44, 31, 22)"></i> in Orlando
			    <div class=" content has-text-centered">
			      <a href="https://bulma.io">
			      <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
			      </a>
			    </div>
					</div>
			   </footer>
			  </section>
			</div>
  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {

			  // Get all "navbar-burger" elements
			  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

			  // Check if there are any navbar burgers
			  if ($navbarBurgers.length > 0) {

			    // Add a click event on each of them
			    $navbarBurgers.forEach( el => {
			      el.addEventListener('click', () => {

			        // Get the target from the "data-target" attribute
			        const target = el.dataset.target;
			        const $target = document.getElementById(target);

			        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			        el.classList.toggle('is-active');
			        ($target != null) ? $target.classList.toggle('is-active') : $target;

			      });
			    });
			  }
      });
</script>

<script>
  document.addEventListener('DOMContentLoaded', () => {
					const $modal = Array.prototype.slice.call(document.querySelectorAll('.modal-button'), 0);
					const $delete = Array.prototype.slice.call(document.querySelectorAll('.delete'), 0);
					if ($modal.length > 0)
					{
						$modal.forEach( el => {
							el.addEventListener('click', () => {
								const target = el.dataset.target;
								const $target = document.getElementById(target);

								el.classList.toggle('is-active');
				        ($target != null) ? $target.classList.toggle('is-active') : $target;
							});
						});
						$delete.forEach( el => {
							el.addEventListener('click', () => {
								const targetDelete = el.dataset.target;
								const $targetDelete = document.getElementById(targetDelete);

								el.classList.toggle('is-active');
				        ($targetDelete != null) ? $targetDelete.classList.toggle('is-active') : $targetDelete;
							});
						});
					}
        });
</script>

<script>
  document.onvisibilitychange = function () {
         		 document.visibilityState === "visible"
		             ? (document.title = "Portfolio")
		             : (document.title = "Psst! Come look at this!");
           };
</script>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
				
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
