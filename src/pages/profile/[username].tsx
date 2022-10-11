import { NextPage } from "next";
import { useRouter } from "next/router";

const Profile:NextPage = () => {
    const router = useRouter();
    const { username } = router.query;
    return(<div>
        <div>
            Welcome
        </div>
        <div>
            {username}
        </div>
    </div>);
}

export default Profile;