import {heroes} from "../data/hero";

function getHeroByName(name) {

    if (name==='') {
        return [];
    }

    name  = name.toLocaleLowerCase();
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));
}
export default getHeroByName;