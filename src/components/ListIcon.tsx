import listIcon from "../assets/images/icon.png";

const ListIcon = () => {
  return (
    <div className="list-icon-container">
      <span>To-Do-List</span>
      <div className="list-icon">
        <img src={listIcon} alt="" />
      </div>
    </div>
  );
};

export default ListIcon;
