import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import styles from "../ui/dashboard.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default Layout