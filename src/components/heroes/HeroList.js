import {useMemo} from 'react';
import {getHeroByPublisher} from "../../selectors/getHeroByPublisher";
import HeroCard from "./HeroCard";


function HeroList ({publisher}) {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="row animate__animated animate__fadeIn">
            {
                heroes.map(hero => {
                    return (
                        <HeroCard key={hero.id} {...hero} />                    )
                })
            }
        </div>
    )
}
export default HeroList;