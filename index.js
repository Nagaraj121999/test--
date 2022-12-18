const exp = require('express')
const pg = require('pg').Pool
const app=exp();

app.get('/verfiy',(req,res)=>{
    const pool = new pg({
        user:process.env.user,
        host:'mel.db.elephantsql.com',
        database:process.env.database,
        password:process.env.password,
        port:5432
    })
    const query = 'SELECT id, password FROM public.test; '
    pool.query(query, (error, results) => {
        if (error) {
          throw error
        }
      
        
         res.json(results.rows)
    })
})

app.listen(process.env.port)