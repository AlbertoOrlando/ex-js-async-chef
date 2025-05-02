// async function getChefBirthday(id) {
//     const ricettaCall = await fetch(`https://dummyjson.com/recipes/${id}`)
//     const ricetta = await ricettaCall.json()
//     const chefCall = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
//     const chef = await chefCall.json()
//     return chef.birthDate
// }

// (async () => {
//     try {
//         const nascita = await getChefBirthday(1)
//         console.log(nascita);
//     } catch (error) {
//         console.error(error)
//     } finally {
//         console.log("finito");
//     }
// })() 





async function getChefBirthday(id) {
    let ricetta
    try {
        const ricettaCall = await fetch(`https://dummyjson.com/recipes/${id}`)
        ricetta = await ricettaCall.json()
    } catch (error) {
        throw new Error(`non posso recuperare la ricetta ${id}`);
    }
    if (ricetta.message) {
        throw new Error(ricetta.message);
    }
    let chef
    try {
        const chefCall = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
        chef = await chefCall.json()
    } catch (error) {
        throw new Error(`non posso trovare lo chef ${ricetta.userId}`);

    }
    if (chef.message) {
        throw new Error(chef.message);

    }

    return dayjs(chef.birthDate).format("DD/MM/YYYY")
}

(async () => {
    try {
        const nascita = await getChefBirthday(1)
        console.log("la data di nascita dello chef è: ", nascita);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("finito");
    }
})() 