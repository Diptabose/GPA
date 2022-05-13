const express = require('express')
const path = require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({
  origin: '*'
}));

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

 res.sendFile(path.join(__dirname, 'public','gpa.html'));

});

app.listen(PORT,()=>{ console.log(`Server running in port ${PORT}`)});

