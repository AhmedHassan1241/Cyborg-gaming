import "./SectionWrapper.css"
const SectionWrapper = ({children}) => {
  return (
    <>
     <div className="section-wrapper" style={{position:"relative"}}>
            {children}
            </div> 
    </>
  )
}

export default SectionWrapper;
