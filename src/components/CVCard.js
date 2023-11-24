import { NavLink } from "react-router-dom";

const CVCard = ({ data }) => {
  let { id, avatar, name, role, bio } = data;
  let path = `profile/${id}`;

  if (bio.length > 25) {
    bio = bio.substring(0, 22) + "...";
  }

  return (
    <NavLink
      className="max-w-[600px] p-5 mx-auto my-10 bg-white rounded-lg shadow-md w-[20%] cursor-pointer hover:bg-gray-100"
      to={path}
    >
      <img
        className="w-32 h-32 mx-auto rounded-full"
        src={require(`../imgs/${avatar}`)}
        alt="Profile picture"
      />
      <h2 className="mt-3 text-2xl font-semibold text-center">{name}</h2>
      <p className="mt-1 text-center text-gray-600">{role}</p>
      <div className="mt-5">
        <h3 className="hidden text-xl font-semibold xl:block">Name</h3>
        <p className="hidden mt-2 text-gray-600 xl:block">{bio}</p>
      </div>
    </NavLink>
  );
};

export default CVCard;
