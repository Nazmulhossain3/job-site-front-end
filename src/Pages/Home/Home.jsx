import Banner from "../../Component/Banner";
import Company from "../../Component/Company/Company";
import Header from "../../Component/Header";
import Work from "../../Component/Work/Work";

const Home = () => {
    return (
        <div className="bg-light">
            <Header></Header>
            <Banner></Banner>
            <Company></Company>
            <Work></Work>
        </div>
    );
};

export default Home;