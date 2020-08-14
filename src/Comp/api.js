import axios from 'axios';

export  async function getuser()  {
    const res=await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return res;
    }

    export  async function getuserone(id)  {
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return res;
        }

    export  async function deleteuser(id)  {
        const res=await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        return res;
        }

export async function update(id,values){
    const res=await axios.put('https://jsonplaceholder.typicode.com/users/'+id, values);
    return res;
}
    