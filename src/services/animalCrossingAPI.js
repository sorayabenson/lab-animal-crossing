export const callVillagers = async () => {
    const res = await fetch('https://ac-vill.herokuapp.com/villagers');
    const data = await res.json();

    return data.map((villager) => ({
        id: villager._id,
        name: villager.name,
        url: villager.url,
        image: villager.image,
        quote: villager.quote,
        personality: villager.personality,
        species: villager.species,
        skill: villager.skill
    }))
}