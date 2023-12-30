const axios = require('axios');
async function fetch() {
    const response = await axios.get('http://www.omdbapi.com/?t=harry&pikey=decsadoe');
    console.log(response.data);
}

fetch();