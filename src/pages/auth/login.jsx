
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import loginImg from '../../assets/loginImg.jpeg';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeClosed, Loader2, LockKeyhole, Mail, } from "lucide-react";
const FormSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required("Required."),
});

function Login() {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data) => {
        setLoading(true)
        console.log(data)
        localStorage.setItem('token','tokemsss')
        setTimeout(() => {
            setLoading(false)
            window.location.href = '/dashboard'
        }, 1000);
    }


    return (
        <div
            className="flex items-center justify-center h-screen  m-auto w-full bg-[#f5f5f5]"
            style={{ backgroundImage: `url(${loginImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="flex flex-col space-y-6 p-5 items-center  h-screen form-wd justify-center login-card w-full "
            >
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl'><span className='text-[red]'>R E D</span> <span>S H I F T</span></h1>
                    <p className='text-[grey] text-sm'>N E T W O R K S</p>
                </div>
                <h2 className="text-xl font-medium flex w-full text-[#233B53]">Sign in</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                placeholder="Enter Email"
                                                {...field}
                                                className="pl-10"
                                            />
                                            <Mail
                                                size={18}
                                                color="grey"
                                                className="absolute top-[50%] left-[10px] transform -translate-y-[50%] cursor-pointer"
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="relative mb-2">
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Enter Password"
                                                    {...field}
                                                    className="pl-10"
                                                />
                                                <LockKeyhole
                                                    size={18}
                                                    color="grey"
                                                    className="absolute top-[50%] left-[10px] transform -translate-y-[50%] cursor-pointer"
                                                />
                                                {showPassword ? (
                                                    <Eye
                                                        size={18}
                                                        color="grey"
                                                        className="absolute top-[50%] right-[10px] transform -translate-y-[50%] cursor-pointer"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    />
                                                ) : (
                                                    <EyeClosed
                                                        size={18}
                                                        color="grey"
                                                        className="absolute top-[50%] right-[10px] transform -translate-y-[50%] cursor-pointer"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                    />
                                                )}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <a href='/forgotPassword' className="flex justify-end mt-0 text-[#3c8dbc]">
                            Forgot password?
                        </a>
                        {loading ? (
                            <Button className="w-full" type="submit" disabled>
                                <Loader2 className="animate-spin" />
                                Please wait
                            </Button>
                        ) : (
                            <Button className="w-full" type="submit">
                                Sign in
                            </Button>
                        )}
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Login