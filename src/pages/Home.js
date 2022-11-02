import { useQuery } from '@tanstack/react-query';
import Axios from 'axios'



const Home = () => {

    const { data } = useQuery(["cat"], async () => {
        const res = await Axios.get("https://catfact.ninja/fact");
        return res.data;
    })
    return (
        <div>
            <h1>kuk can, serent god real name is <p>{ data?.fact }</p></h1>

        </div>
    )
}

export default Home