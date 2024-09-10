import "./Buttons.css";
const PrimaryButton = (props) => {
  return (
    <div className=" button primary-button">
      <a href="##">{props.children}</a>
    </div>
  );
};

const SecondaryButton = (props) => {
  return (
    <div
      className={`"button" ${
        props.children === "Downloaded" ? "downloadedBtn" : "secondary-button"
      }`}
    >
      <a href="##">{props.children}</a>
    </div>
  );
};
const ViewButton = (props) => {
  return (
    <div className=" button view-button">
      <div className="viewLibraryBtn">
        <a href="##">{props.children}</a>
      </div>
    </div>
  );
};
export default PrimaryButton;
export { SecondaryButton, ViewButton };
