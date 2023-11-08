import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabCard from "./TabCard";


const AllTabs = () => {
    const loader = useLoaderData()
    console.log(loader)
    const filter =  loader?.filter((p) => p.Category.includes("web-development"));
  const filter1 = loader?.filter((p) => p.Category.includes("graphics-design"));
  const filter2 = loader?.filter((p) => p.Category.includes("digital-marketing"));
  console.log(filter,filter1,filter2)
    return (
        <div>
            <div className="mt-5 mx-auto">
                <h2 className="text-center text-3xl font-semibold mt-5">
                    Browse By Category
                </h2>
                <Tabs className="text-center mt-5">
                    <div className="flex justify-center items-center">
                    <TabList className=" gap-12  text-center ">
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                        
                    </TabList>
                    </div>
                    <div>
                        <TabPanel>
                            <div className="grid grid-cols-2 gap-5 mx-auto p-5">
                                {filter.map((cart) => (
                                    <TabCard cart={cart} key={cart.id}></TabCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-2 gap-5 mx-auto p-5">
                                {filter1.map((cart) => (
                                    <TabCard cart={cart} key={cart.id}></TabCard>
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-2 gap-5 mx-auto p-5">
                                {filter2.map((cart) => (
                                    <TabCard cart={cart} key={cart.id}></TabCard>
                                ))}
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
};

export default AllTabs;