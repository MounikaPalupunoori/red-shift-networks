import React, { useState } from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
export default function UserChangePasswordForm({ selectedUser, close }) {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit = async (data) => {
        console.log(data)
        setTimeout(() => {

        }, 1000);
    }
    const FormSchema = Yup.object({
        password: Yup.string()
            .required("Required."),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match.")
            .required("Required."),
    });

    const form = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            password: '',
            confirmPassword: ''
        },
    });
    return (
        <>

            <div className="flex-1 overflow-auto p-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6" id='userForm'>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password *</FormLabel>
                                    <FormControl>
                                        <Input type={showPassword ? 'text' : 'password'} placeholder="Enter User Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password *</FormLabel>
                                    <FormControl>
                                        <Input type={showPassword ? 'text' : 'password'} placeholder="Enter Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <p className='text-[#3c8dbc] cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? 'Hide Password' : 'Show Password'}</p>
                    </form>
                </Form>
            </div>

            <div className="flex justify-end space-x-4 p-2 border-t">
                <Button variant="outline" className='cursor-pointer w-30' onClick={close}>Cancel</Button>
                {loading ? (
                    <Button className="w-30" type="submit" disabled>
                        <Loader2 className="animate-spin" />
                        Please wait
                    </Button>
                ) : (
                    <Button form='userForm' type='submit' className='w-30'>Update</Button>
                )}
            </div>
        </>
    )
}
