import Banner from "../../Component/Banner";
import Company from "../../Component/Company/Company";
import Header from "../../Component/Header";

const Home = () => {
    return (
        <div className="bg-light">
            <Header></Header>
            <Banner></Banner>
            <Company></Company>
        </div>
    );
};

export default Home;