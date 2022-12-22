document.addEventListener('DOMContentLoaded', () =>{
    const random = getRandomIt(1,200);
    feachData(random);
});

const getRandomIt = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}
const feachData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json();
        pintCard(data);
    }
    catch(error) {
    }
};

const pintCard = (pokemon) => {
    console.log(pokemon);

    const flex = document.querySelector('.flex')
    const template = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    const clone = template.cloneNode(true);

    clone.querySelector('.img-card').setAttribute('src' , pokemon.sprites.other.dream_world.front_default)
    clone.querySelector('.title-card').innerHTML = `${pokemon.name} <span>${pokemon.stats[0].base_stat}hp</span>`
    clone.querySelector('.card-text').innerHTML = pokemon.base_experience + 'exp'
    clone.querySelectorAll('.card-social h3')[0].innerHTML = pokemon.stats[1].base_stat + 'K'
    clone.querySelectorAll('.card-social h3')[1].innerHTML = pokemon.stats[2].base_stat + 'K'
    clone.querySelectorAll('.card-social h3')[2].innerHTML = pokemon.stats[3].base_stat + 'K'

    fragment.appendChild(clone);
    flex.appendChild(fragment);
}
