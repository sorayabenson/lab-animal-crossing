import { formatVillagers } from './munge-utils';

export const callVillagers = async () => {
    const res = await fetch('https://ac-vill.herokuapp.com/villagers?perPage=400');
    const data = await res.json();
    const shapedData = formatVillagers(data);

    return shapedData;
}

export const villagerTicket = async (id) => {
    const res = await fetch(`https://ac-vill.herokuapp.com/villagers/${id}`)
    const data = await res.json();

    return data;
}


// export const callVillagers = async () => {
//     let villagers = [];
    
//     const res = await fetch('http://acnhapi.com/v1/villagers');
//     const data = await res.json();

//     console.log('DATA', data)

//     data.map((villager) => ({
//         id: villager.id,
//         name: villager.name.name-USen,
//         icon: villager.icon_uri,
//         image: villager.image_uri,
//         quote: villager.saying,
//         personality: villager.personality,
//         species: villager.species,
//         hobby: villager.hobby,
//         catchphrase: villager.catch-phrase
//     }))

//     console.log(villagers)

//     return villagers;
// }