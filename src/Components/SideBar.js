import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import { HiOutlineHome } from "react-icons/hi";
import { FiUserCheck, FiUsers, FiBriefcase, FiCalendar, FiStar, FiFileText } from "react-icons/fi";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: <HiOutlineHome />,
  },

  {
    path: "/",
    name: "Jobs",
    icon: <FiBriefcase />
  },
  {
    path: "/clients",
    name: "Clients",
    icon: <FiUserCheck />
  },
  {
    path: "/candidates",
    name: "Candidates",
    icon: <FiUsers />
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: <FiCalendar />
  },
  {
    path: "/reports",
    name: "Reports",
    icon: <FiFileText />
  },
  {
    path: "/rewards",
    name: "Rewards",
    icon: <FiStar />
  }
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>

      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "300px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">

            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  Hire++
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          <div className="card0">
            Our Additional Tools
            <div>
              
              <input className="box0" type="text" name='st' rules={{ required: true, }} id="st" placeholder="Masking Tool" required />
            </div>
            <div>
             
              <input className="box0" type="text" name='si' rules={{ required: true, }} id="si" placeholder="Standalone Interview" required />
            </div>
          </div>

          <div className="bars-2">
            <FaBars onClick={toggle} />
          </div>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
