import React from 'react';
import { useSelector } from 'react-redux';

const Data = () => {
  const dataList = useSelector(state => state.data.dataList);

  return (

    <div className="overflow-x-auto shadow-md rounded-lg">
    <table className="min-w-full leading-normal">
        <thead>
            <tr className="bg-blue-500 text-white">
                <th scope="col" className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">
                    Name
                </th>
                <th scope="col" className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">
                    Phone
                </th>
                <th scope="col" className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">
                    Email
                </th>
                <th scope="col" className="px-5 py-3 border-b-2 border-gray-200 text-left text-sm uppercase font-semibold">
                    City
                </th>
            </tr>
        </thead>
        <tbody>
            {dataList.map((data, index) => (
                <tr key={index} className="bg-white border-b">
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <div className="flex items-center">
                            <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                    {data.name}
                                </p>
                            </div>
                        </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{data.phone}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{data.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">{data.city}</p>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

  );
};

export default Data;
