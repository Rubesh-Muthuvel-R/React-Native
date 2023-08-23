export type Details = {
    login:string,
    id:number,
    type:string,
    created_at:string,
    updated_at:string,
    public_repos:number
}

// export const getDetails = async (username:string):Promise<Details> => {
//     const url = `https://api.github.com/users/${username}`
//     const {data} = await axios.get<Details>(url)
//     return {id:data.id,login:data.login};
// }

// export async function getDetails(username:string):Promise<Details> {
//     const url = `https://api.github.com/users/${username}`;
//     const res = await fetch(url);
//     const data = await res.json();

//     return {login:data.login,id:data.id}
// }

