import { getHomePage } from "@/data/loader";
async function loader() { 
    const path = '/api/test';
    const STRAPI_API_URL = process.env.STRAPI_API_URL;
    const url = new URL(path,STRAPI_API_URL);

   
    const data = await getHomePage();
    if (!data) {
        throw new Error('Failed to fetch data for the test page');
    }
    console.log( data);
    return {...data.data};
}
export default async  function TestPage() {
    const data = await loader();
    console.log(data);
    return (
        <div>
            <h1 className="font-bold">{data.title}</h1>
            <p className="mt-4">{data.description}</p>
            
        </div>
    );
}