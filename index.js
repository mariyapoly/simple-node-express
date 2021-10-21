const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Wow! I am Excited learn node and express JS')
});



const usres = [
    {
        id: 0,
        name: 'sabana',
        age: '60',
        role: 'actor',
        email: 'sabana@gmail.com',
        phone: '01247458936',
    },
    {
        id: 1,
        name: 'sabnoor',
        age: '48',
        role: 'actor',
        email: 'sabnoor@gmail.com',
        phone: '01247565363',
    },
    {
        id: 2,
        name: 'shuvoshi',
        age: '55',
        role: 'actor',
        email: 'shuvoshi@gmail.com',
        phone: '0178593625',
    },
    {
        id: 3,
        name: 'sharabanti',
        age: '50',
        role: 'actor',
        email: 'sharabanti@gmail.com',
        phone: '0124165898',
    },
    {
        id: 4,
        name: 'soniya',
        age: '38',
        role: 'actor',
        email: 'soniya@gmail.com',
        phone: '014796252',
    },
]

app.get('/users', (req, res) => {
    // use query parameter
    const search = req.query.search;
    if (search) {
        const searchREsult = usres.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchREsult);
    }
    else {
        res.send(usres)
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = usres.length;
    usres.push(newUser);
    console.log('hiting the post', req.body)
    res.json(newUser)

})

// dynamic parameter
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = usres[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(["mango", "banana", "orange", "apple", "grap"])
})

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('yammy yammy tok misti fazli mango')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})