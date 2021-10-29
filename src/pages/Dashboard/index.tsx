import Button from "../../components/Button";
import { useAuth } from "../../providers/Auth";
import { DashboardContent } from "./styles";
import { BsCheckLg } from "react-icons/bs";
export default function Dashboard() {
    const{Logout} = useAuth()
    return (
        <DashboardContent>
            <h1>É isso ai! <BsCheckLg /> </h1>
            <Button onClick={Logout} whiteSchema={false} >Logout</Button>
        </DashboardContent>
    )
}
