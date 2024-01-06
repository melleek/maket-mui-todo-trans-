function Card({ h1, img }) {
  return (
    <div className="flex text-[#fff]">
      <h1 className="w-[180px] mt-[70px]">{h1}</h1>
      <img src={img} className="w-[100px]" alt="" />
    </div>
  );
}
export default Card;


function Card1({ img , h1}) {
    return (
        <div>
            <img src={img} alt="" />
            <h1 className="text-[#fff] sm:w-[150px] sm:mt-[15px]">{h1}</h1>
        </div>
    )
}
export { Card1 }