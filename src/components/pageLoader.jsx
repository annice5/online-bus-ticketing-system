import { ThreeDots } from "react-loader-spinner"

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center">
    <ThreeDots
  visible={true}
  width="30"
  color="#29C8B5"
  radius="6"
  ariaLabel="three-dots-loading"

  />
    </div>
  )
}

export default PageLoader