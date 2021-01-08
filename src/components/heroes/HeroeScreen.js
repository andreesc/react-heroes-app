import {useMemo} from 'react';
import {useParams, Redirect} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";

function HeroScreen({history}) {

	const {heroId} = useParams();
	const hero = useMemo(() => getHeroById(heroId), [heroId]);

	if (!hero) {
		return <Redirect to="/" />
	}

	const handleReturn = () => {

		if (history.length<=2) {
			history.push('/');
		} else {
			history.goBack();
		}

	}

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`https://andreesc.github.io/react-heroes-app/assets/heroes/${heroId}.jpg`}
					alt={hero.superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>
			<div className="col-8">
				<h3>{hero.superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item font">
						<strong>Alter ego: {hero.alter_ego}</strong>
					</li>
					<li className="list-group-item font">
						<strong>Publisher: {hero.publisher}</strong>
					</li>
					<li className="list-group-item font">
						<strong>First appearance: {hero.first_appearance}</strong>
					</li>
				</ul>
				<h5>Characters</h5>
				<p>{hero.characters}</p>
				<button
					className="btn btn-outline-primary"
					onClick={handleReturn}
				>
					Return
				</button>
			</div>
		</div>
	)
}
export default HeroScreen;