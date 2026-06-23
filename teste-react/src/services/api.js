
const dataUsers = [
    {
        id: 1,
        name: "Thiago",
        email: "testetiago@teste.com",
        senha: "1234"
    },
    {
        id: 2,
        name: "Rafael",
        email: "[EMAIL_ADDRESS]",
        senha: "1234"
    },
    {
        id: 3,
        name: "Joabe",
        email: "[EMAIL_ADDRESS]",
        senha: "1234"
    }
]

const api = {
    getUser: (endpoint, { email, senha }) => {
        switch (endpoint) {
            case "user":
                {
                    const user = dataUsers.find(u => u.email === email && u.senha === senha)
                    if (!user) throw new Error("Usuario não encontrado!")
                    return user
                }
        }
    },
    post: ({ endpoint, data }) => {
        switch (endpoint) {
            case "users":
                dataUsers.push(data)
                return dataUsers
        }
    },
    put: ({ endpoint, data, id }) => {
        switch (endpoint) {
            case "users":
                {
                    const index = dataUsers.findIndex(u => u.id === id)
                    dataUsers[index] = data
                    return dataUsers
                }
        }
    },
    delete: ({ endpoint, id }) => {
        switch (endpoint) {
            case "users":
                {
                    const index = dataUsers.findIndex(u => u.id === id)
                    dataUsers.splice(index, 1)
                    return dataUsers
                }
        }
    }
}

export default api;