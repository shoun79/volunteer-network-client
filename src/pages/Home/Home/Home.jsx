import Events from "../Events/Events";

const Home = () => {
    return (
        <div >
            <div className="text-center">
                <h1 className="text-4xl font-semibold mt-6">I GROW BY HELPING PEOPLE IN NEED</h1>
                <form className="flex flex-col items-center w-1/2 mb-4 md:flex-row md:px-16 mx-auto mt-4">
                    <input
                        placeholder="Search..."
                        required=""
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-purple-500 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                        Search
                    </button>
                </form>
            </div>
            <Events></Events>
        </div>
    );
};

export default Home;