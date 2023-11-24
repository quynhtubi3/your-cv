import plus from "../imgs/plus.png";

function AddButton() {
  return (
    <div
      className="flex items-center justify-center w-[80px] px-[10px] py-[5px] bg-cyan-300 rounded-[10px] cursor-pointer
    hover:bg-cyan-500"
    >
      <div className="mx-[10px] text-white">Add</div>
      <img className="w-[20px] h-[20px]" src={plus} alt="" />
    </div>
  );
}

export default AddButton;
