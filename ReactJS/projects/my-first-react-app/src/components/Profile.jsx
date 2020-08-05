import React from 'react';

const Profile = () => {
	return (
		<main className="content">
			<div className="wallpaper">
				<img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" />
			</div>
			<div className="profile-information">
				<img src="https://selfie2anime.com/img/carousel/2.jpg" />
				<div className="about-profile">
					<p>Dmitry K.</p>
					<span>Date of Birth: 2 January</span>
					<span>City: Minsk</span>
					<span>Education: BSU '11</span>
					<span>Web Site: <a href="https://www.it-kamasutra.com">https://www.it-kamasutra.com</a></span>
				</div>
			</div>
			<div className="posts">
				<h3>My posts</h3>
				<form>
					<textarea placeholder="your news..."></textarea>
					<button>Send</button>
				</form>
				<div className="users-posts">
					<img className="icon" src="" />
					<p>Hey, why nobody love me?</p>
				</div>
				<div className="users-posts">
					<img className="icon" src="" />
					<p>It's our new programm! Hey!</p>
				</div>
				<div className="users-posts">
					<img className="icon" src="" />
					<p>Sometext in the body</p>
				</div>
			</div>
		</main>
	)
}
export default Profile