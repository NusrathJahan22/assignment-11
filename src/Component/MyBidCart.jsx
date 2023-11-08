/* eslint-disable react/prop-types */

const MyBidCart = ({myBid}) => {
    // eslint-disable-next-line no-unused-vars
    const {email,price,buyeremail,deadline,jobtitle} =myBid
    return (
       


        <div className="flex justify-center items-center gap-20 m-10 border-4 border-light-blue-600">
            {/* <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5> */}
            
      <div className="flow-root  ">
        <div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
              <div>
                <h2  className="font-bold">JobTitle</h2>
                <div className="inline-flex items-center text-base text-gray-900 dark:text-white">{jobtitle}</div>
              </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-gray-900 dark:text-white">Bider Emails</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">{email}</p>
              </div>
              <div>
                <h2  className="font-bold">Price</h2>
                <div className="inline-flex items-center text-base text-gray-900 dark:text-white">{price}</div>
              </div>
             
            </div>
          </li>
         
        </ul>
        </div>
      </div>
        </div>
    );
};

export default MyBidCart;






