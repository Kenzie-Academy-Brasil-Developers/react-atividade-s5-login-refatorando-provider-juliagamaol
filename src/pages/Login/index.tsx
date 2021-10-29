import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";import Button from '../../components/Button'
import Input from '../../components/Input'
import { useAuth } from '../../providers/Auth'
import { Container, Content } from './styles'
import { useHistory } from "react-router";

interface UserData{
    email:string 
    password: string
}

export default function Login() {
    const{signIn} = useAuth()
    const history = useHistory()
    const schema = yup.object().shape({
        email:yup.string().required('Campo Obrigatório').email('E-mail inválido'),
        password:yup.string().required('Campo Obrigatório').min(8,'Mínimo 8 caracteres')
    })
    const{register,handleSubmit,formState:{errors}} = useForm<UserData>({
        resolver:yupResolver(schema)
    })

    const handleClick = (userData: UserData) => {
        signIn(userData);
        history.push("/dashboard")
    };
    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit(handleClick)}>
                    <Input 
                    register={register}
                    name="email"
                    label="E-mail"
                    placeholder="Seu email"
                    />
                    {errors.email?.message}
                    <Input 
                    register={register}
                    type="password"
                    name={"password"}
                    label={"Senha"}
                    placeholder="Sua senha"
                    />
                    {errors.password?.message}
                    <Button type="submit" whiteSchema>Enviar</Button>
                </form>

            </Content>
        </Container>
    )
}
