import express from 'express'
const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready!');
});

app.get('/api/jokes', (req, res)=>{
    const jokes=[
        {
            id:1, 
            title:'first joke',
            content:'Why was the math book sad? Because it had too many problems.',
        },
        {
            id:2, 
            title:'first joke',
            content:'Why was the math book sad? Because it had too many problems.',
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Serve at https://localhost:${port}`);
});