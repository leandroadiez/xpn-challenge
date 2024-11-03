import axios from "axios";
import expect from "expect";

async function axiosGetRequest (id){
    try{
        const response = await axios.get(process.env.API_URL+"/posts/"+id)
        expect(response.status).to.equal(200);
    }
    catch(error){
        console.log(error);
    }
}

axiosGetRequest();