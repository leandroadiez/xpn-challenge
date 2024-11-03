import axios from "axios";
import expect from "expect";

async function sendPostRequest() {
    const data: UserData = {
        "title": "foo",
        "body": "bar",
        "userId": 1,
    }
    try {
        const response = await axios.post(process.env.API_URL+"/posts", data);
        console.log(response.status);
        expect(response.status).to.equal(201);
    }
    catch (error) {
        console.log(error)
    }
}

sendPostRequest();