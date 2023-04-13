import React, {useEffect,useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {findAllUsersThunk} from "../thunks/user-thunks";
import {logoutThunk, profileThunk} from "../thunks/auth-thunks";
import UserItem from "./user-item";
import UserList from "./user-list";
import {useNavigate} from "react-router";
import {setSidebar} from "../reducers/sidebar-reducer";

function Profile() {


    const dispatch = useDispatch();
    const navigate = useNavigate()
    /*useEffect(() => {
        dispatch(profileThunk());
        dispatch(findAllUsersThunk());
    }, []);*/
    useEffect( () => {
        dispatch(setSidebar({component:"none",newsid:"ddd"}));
         dispatch(profileThunk());
        console.log("here")
        dispatch(findAllUsersThunk());
    }, [] );

    const { currentUser } = useSelector((state) => state.user);

    const [profile, setProfile] = useState(currentUser);

    return (
        <div className="container">
            <h2>Profile</h2>
            <button onClick={() => {
                dispatch(logoutThunk());
                navigate("/login")
            }} className="float-end btn btn-primary">
                Logout
            </button>
            <div className="row">
                <div className="col-md-6">
                    <h3>Personal Information</h3>
                    {currentUser && (
                        <div>
                            <img src={currentUser.profilePhoto}/>
                            <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                        </div>
                    )}
                    <Link to="/search" className="btn btn-primary">
                        Search Results
                    </Link>
                </div>
            </div>
                {currentUser && currentUser.role==="ADMIN" && (
                   <div>
                       Admin View
                       <UserList/>
                   </div>
                )
                    }
        </div>
    );
}

export default Profile;
