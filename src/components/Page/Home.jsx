
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
    const coffees = useLoaderData()
    return (
        <div className='md:m-8'>
            <h1 className='text-4xl font-bold text-blue-300'>Hot cold coffee: {coffees.length}!</h1>

            <div className="grid  md:grid-cols-2 grid-cols-1 gap-4">
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;