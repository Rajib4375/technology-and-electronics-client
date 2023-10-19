

const BandCard = ({band}) => {

  const {image, brand_name} = band || {}
    return (
        <div className="card  bg-[#0052FF26] shadow-xl">
  <figure className="px-5 pt-5">
    <img src={image} alt="" className="rounded-xl bg-white w-[493px] h-[450px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-2xl font-semibold text-[#0052FF] ">{brand_name}</h2>
    
  </div>
</div>
    );
};

export default BandCard;