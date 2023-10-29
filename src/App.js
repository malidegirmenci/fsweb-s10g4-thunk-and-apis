import React, { useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Item from "./components/Item";
import FavItem from "./components/FavItem";
import { useDispatch, useSelector } from "react-redux";
import { addFav, fetchAnother } from "./store/actions/userActions";
import banner from './img/banner.jpg'
import { DotLoader } from "react-spinners";

export default function App() {
  const { loading, current, favs } = useSelector((state) => state);

  const dispatch = useDispatch();
  function addToFavs() {
    dispatch(addFav(current));
  }

  const fetchHandler = () => {
    dispatch(fetchAnother())
  }

  useEffect(() => {
    fetchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mt-24">
      <div className="wrapper max-w-[60%] mx-auto px-4 border p-3 bg-[#262626] rounded-md text-[#efefef]">
      <img src={banner} alt="banner" className="mt-0 w-screen h-28"/>
        <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
          <NavLink
            to="/"
            exact
            className="py-3 px-6 "
            activeClassName="bg-[#3b3b3b] shadow-sm text-[#efefef] rounded-md"
          >
            Random Gamer
          </NavLink>
          <NavLink
            to="/favs"
            className="py-3 px-6 "
            activeClassName="bg-[#3b3b3b] shadow-sm text-[#efefef] rounded-md"
          >
            MY TEAM
          </NavLink>
        </nav>
        <Switch>
          <Route exact path="/">
            {loading && <div className="bg-[#3b3b3b] p-6 shadow-md text-center flex justify-center items-center"><DotLoader color="#efefef"/></div>}
            {!loading && current && <Item data={current} />}
            <div className="flex gap-3 justify-center py-3">
              <button onClick={() => fetchHandler()}
                className="select-none rounded px-4 py-2  bg-[#3b3b3b] text-[#efefef] hover:bg-[#efefef] hover:text-[#3b3b3b]"
              >
                Another One
              </button>
              <button
                onClick={addToFavs}
                className="select-none rounded px-4 py-2 bg-[#3b3b3b] hover:bg-[#efefef] text-[#efefef] hover:text-[#3b3b3b]"
              >
                Add My Team
              </button>
            </div>
          </Route>
          <Route path="/favs">
            <div className="flex flex-col gap-3">
              {favs.length > 0
                ? favs.map((item) => (
                  <FavItem key={`${item.id.name}${item.id.value}`} item={item} />
                ))
                : <div className="bg-[#262626] p-6 text-center shadow-md">You don't have any gamer</div>
              }
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
