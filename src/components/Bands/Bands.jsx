/* eslint-disable react/prop-types */

import BandCard from "./BandCard";


const Bands = ({bands}) => {
    console.log(bands)
    return (
        <div className="py-10">
            <h1 className="text-3xl font-bold text-center">All Categories Band</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-10 ">
                {
                    bands.map(band =><BandCard key={band.id} band={band}></BandCard>)
                }
            </div>
        </div>
    );
};

export default Bands;