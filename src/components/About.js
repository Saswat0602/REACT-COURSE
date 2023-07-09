import { Outlet } from "react-router-dom";
// import ProfileFunctionalComponet from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 className="font-bold text-xl p-8">
              {user.name} - {user.email}
            </h3>
          )}
        </UserContext.Consumer>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nisi, ex
          eveniet accusamus delectus quae! Voluptate eos sunt voluptates cum
          iusto, dolorem autem ad error modi. Non veniam unde doloribus?
        </p>
        <Profile />
      </div>
    );
  }
}

export default About;

/**
 *
 * Parent Constructor
 * Parent render
 *    First Child constructor
 *    First Child render
 *    Second Child constructor
 *    Second Child render
 *
 *    DOM UPDATED for children
 *
 *    first Child componentDidMount
 *    Second Child componentDid
 *  Parent componentDidMount
 *
 *
 */
