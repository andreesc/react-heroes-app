import {useMemo} from 'react';
import HeroCard from "../heroes/HeroCard";
import {useForm} from "../../hooks/useForm";
import {useLocation} from "react-router-dom";
import queryString from 'query-string';
import getHeroByName from "../../selectors/getHeroByName";

function SearchScreen({history}) {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>

            <h1>Search screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={handleSearch} autoComplete="off">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Find  your hero"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    {heroesFiltered.length===0 && <div className="alert alert-info">Search a hero</div>}

                    {
                        heroesFiltered.map(hero => {
                            return (
                                <HeroCard key={hero.id} {...hero} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default SearchScreen;