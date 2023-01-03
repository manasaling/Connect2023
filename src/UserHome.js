import userEvent from '@testing-library/user-event';
import MatchedProfile from "./MatchedProfiles";


const UserHome = () => {
    return (   
    <box>
        <h1>Welcome user1!</h1>
        <MatchedProfile></MatchedProfile>
    </box>

     );
}
 
export default UserHome;