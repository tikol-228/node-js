// export const usernameController = ((req, res) => {
//     const username = req.params.username;
//     res.send(`hello ${username}`);
// })

// export const keywordController = ((req, res) => {
//     console.log(req.query);
//     const keyword = req.query.keyword;
//     res.send(`search ${keyword}`)
// })

export const userLogin = ((req, res) => {
    res.send('login route')
    console.log('login')
})

export const userSingUp = ((req, res) => {
    res.send('singUp route')
    console.log('singUp')
})