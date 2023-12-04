
const baseUrl = 'http://localhost:5000'

export const addNote = async ({ title, priority }) => {
    try {
        const res = await fetch(`${baseUrl}/notes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                priority
            })
        })
        const data =  await res.json()
        if (data.error) {
            throw data.error
        }
        return data
    } catch (err) {
        throw err
    }
}

export const getNotes = async () => {
    try {
        const res = await fetch(`${baseUrl}/notes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        return await res.json()
    } catch (err) {
        throw err
    }
}