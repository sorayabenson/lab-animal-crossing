export const formatVillagers = (data) => {
    
    const shapedResponse = data.map(villager => {
        const regex = /\s/gm;
        const str = `${villager.name}`;
        const subst = '-';
        const nameId = str.replace(regex, subst);
    
        return {
            id: nameId,
            name: villager.name,
            url: villager.url,
            image: villager.image,
            quote: villager.quote,
            personality: villager.personality,
            species: villager.species,
            skill: villager.skill
        }
    })

    return shapedResponse
}