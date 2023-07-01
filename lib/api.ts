import { LoginUserType, RegisterUserType } from "@/global";
import { Project, User } from "@prisma/client";


const fetcher = async ({
    url,
    method,
    body,
    json = true
} : {
    url: string,
    method: string,
    body: Partial<User|Project>|null|undefined,
    json?: boolean
}) => {
    const res = await fetch(url, {
        method,
        body: body && JSON.stringify(body),
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    if(!res.ok){
        throw new Error('API ERROR');
    }

    if(json){
        const data = await res.json();
        return data.data;
    }

    return res;
}
export const register = (user : RegisterUserType) =>{
    return fetcher({
        url : 'api/register',
        method : 'post',
        body: user
    })
}

export const signin = (user : LoginUserType) =>{
    return fetcher({
        url : 'api/signin',
        method : 'post',
        body: user
    })
}


export const createNewProject = (name : string)=>{
    return fetcher({
        url: 'api/project',
        method : 'post',
        body: {name},
/*         json: true */
    })
}