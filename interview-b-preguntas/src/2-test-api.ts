import axios from "axios";
import expect from "expect";

require("dotenv").config();

async function testApiPost() {
    const data: UserData = {
        "title": "foo",
        "body": "bar",
        "userId": 1,
    };
    try {
        const response = await axios.post(process.env.API_URL+"/posts", data);
        console.log("id: " + response.data.id);
        expect(response.status).toBe(201);
    }
    catch (error) {
        console.log(error);
    }
}

async function testApiGet(id) {
    try {
        const response = await axios.get(process.env.API_URL+"/posts/"+id);
        console.log("id: " + response.data.id)
        expect(response.status).toBe(200);
    }
    catch (error) {
        console.log(error)
    }
}

testApiPost();
testApiGet(1);
