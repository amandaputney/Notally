import { checkToken } from "../../utilities/users-service";

export default function ArchivePage () {
    async function handleCheckToken() {
        const expDate = await checkToken(); 
        console.log(expDate)
        }

  
    return (
//must wrap below in <> </> to return a single root component/node
    <>
        <h1>Archive</h1>
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
    );
};