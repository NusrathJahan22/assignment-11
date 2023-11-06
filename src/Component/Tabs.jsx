/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-irregular-whitespace */
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel } from "react-tabs";


const Tabs = () => {
    const loader = useLoaderData()
    console.log(loader)
    return (
        <div>
            <div className="mt-5">
                <h2 className="text-center text-3xl font-semibold mt-5">
                    Browse By Category
                </h2>
                <Tabs className="text-center mt-5">
                    <TabList className="gap-12">
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>

                    
                    
                </Tabs>
            </div>

        </div>
    );
};

export default Tabs;