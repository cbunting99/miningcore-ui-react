import { useSelector } from "react-redux";
export const HeaderRight = ({ children }) => {
  const app = useSelector(state => state.app)
  return (
    app[0] ?
      <div className="header-right">stratum+tcp://127.0.0.1:3333</div>
      : null
  )
}
