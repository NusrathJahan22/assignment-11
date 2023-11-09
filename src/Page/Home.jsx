
import AllTabs from "../Component/AllTabs";
import { CarouselDefault } from "../Component/Banner";
import ExtraSection1 from "../Component/ExtraSection1";
import ExtraSection2 from "../Component/ExtraSection2";
import Footer from "../Component/Footer";






const Home = () => {
    return (
        <div>
           <CarouselDefault></CarouselDefault>
           <AllTabs></AllTabs>
           <ExtraSection1></ExtraSection1>
           <ExtraSection2></ExtraSection2>
          
           
        </div>
    );
};

export default Home;