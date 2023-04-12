import {useDispatch} from "react-redux";
import {deleteUserThunk} from "../services/user-thunks";

const UserItem = ({user}) => {
    const dispatch = useDispatch();
    const deleteUserHandler = (id) => {
        dispatch(deleteUserThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-12">
                        <span className="">{user.firstName} {user.lastName} </span>&nbsp;
                        {user.role}
                        <span className="btn btn-primary float-right"
                        onClick={() => deleteUserHandler(user._id)}>Delete</span>
                </div>
            </div>
        </li>
    );
};
export default UserItem;