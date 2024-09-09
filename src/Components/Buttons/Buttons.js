import './Buttons.css'
const PrimaryButton = (props) => {
  return (
    <div className="main-button">
    <a href="##">{props.children}</a>
  </div>
  )
}

const SecondaryButton = (props) => {
    return (
      <div>
        
      </div>
    )
  }
export default PrimaryButton;
export {SecondaryButton};
