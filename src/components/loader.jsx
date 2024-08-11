import { ThreeDots } from "react-loader-spinner"

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
    <ThreeDots
  visible={true}
  width="30"
  color="#000000"
  radius="6"
  ariaLabel="three-dots-loading"

  />
    </div>
  )
}

export default Loader