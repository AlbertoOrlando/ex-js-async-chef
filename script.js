async function getChefBirthday(id) {
    const ricettaCall = await fetch(`https://dummyjson.com/recipes/${id}`)
    const ricetta = await ricettaCall.json()
    const chefCall = await fetch(`https://dummyjson.com/users/${ricetta.userId}`)
    const chef = await chefCall.json()
    return chef.birthDate
}

(async () => {
    try {
        const ricetta = await getChefBirthday(1)
        console.log(ricetta);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("finito");
    }
})() 