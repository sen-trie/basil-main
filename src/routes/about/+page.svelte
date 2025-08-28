<script>
	import { getContext } from 'svelte';

	const images = getContext('images');
</script>

<div class="body-container">
	<h1>Welcome!</h1>
	<br />
	<p>
		The concept for this site originated as my personal recipe collection. I recently began baking
		in early 2025 in Canada, and when my roommates actually enjoyed my first few attempts, I decided
		to make it a proper hobby. This website is essentially my digital recipe notebook that I've
		decided to share as I continue learning.
		<br /><br />
		If you haven't checked it out yet, head over to the
		<a href="https://explore.basilclub.cafe"><u>cafe</u></a> for an interactive experience! There, I
		leverage my 3D experience to create an isometric room with a bunch of interactables.
	</p>
	<br />
	<h1>Did you create these recipes?</h1>
	<br />
	<p>
		The recipes here are adapted from well-known sites and cookbooks. I take existing recipes and
		modify them based on what I have available or what I've learned works better. Many recipe sites
		have poor UI that makes it hard to reference while baking, especially on mobile. You'd have to
		scroll through long stories or deal with layouts that aren't practical in the kitchen. I wanted
		to organize these adapted recipes in a format that's easily usable when you're baking.
	</p>
	<figure>
		<img src={images['progress.webp']} />
		<figcaption>
			Experimenting with texture colors was a major part of the design process. An important goal
			was establishing contrast, which helped to visually separate the first and second floors.
		</figcaption>
	</figure>
	<br />
	<h1>How was this site made?</h1>
	<br />
	<p>
		Everything you see here, including the vast majority of the models in <a
			href="https://explore.basilclub.cafe"><u>/cafe</u></a
		>, was designed, developed and produced by me. Production of this project started in late May
		2025 and came to fruition about a few months afterwards. I wanted to combine my technical skills
		with my newfound interest in baking, so this project became a way to practice both web
		development and 3D modelling. Learning how to maintain web performance was particularly
		challenging, as it was my first time optimizing models for low-end devices.
	</p>
	<figure>
		<img src={images['izakaya.webp']} />
		<figcaption>
			Initial failed attempt at creating a restaurant, inspired by an izakaya. This model never got
			past the prototyping stage as I didn't like how the premade textures looked.
		</figcaption>
	</figure>
	<br />
	<h1>End Note</h1>
	<br />
	<p>
		Originally, this was just for my own reference, but I realized others might find it useful. I'm
		still learning with every bake, and this site grows along with my skills. If you have
		suggestions or improvements, feel free to reach out!
	</p>
</div>

<style lang="scss">
	.body-container {
		padding: 45px 25px 25px;
		width: min(1200px, 100%);
	}

	h1 {
		font-size: 2.2rem;
	}

	p {
		font-size: 1.4rem;
	}

	figure {
		display: block;
		margin: 2rem auto 0;
		width: min(700px, 70%);

		img {
			width: 100%;
		}

		figcaption {
			width: fit-content;
		}
	}
</style>
