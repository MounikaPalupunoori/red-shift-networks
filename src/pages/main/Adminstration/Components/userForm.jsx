import React, { useState } from 'react';
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
import { CircleX, Loader2, Upload, X } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
export default function UserForm({ selectedUser, type, close ,onSaveUser }) {
    const [loading, setLoading] = useState(false);
    const priviligesTypes = ['Read-Write', 'Admin']
    const networkGroupTypes = ['All'];
    const { toast } = useToast();
    const [uploadLogo, setUploadLogo] = useState();
    const onSubmit = async (data) => {
        const userData = {
            ...data,
            id: selectedUser?.id || Date.now(), 
        };
    
        onSaveUser(userData, type);
        toast({
            title: `${type === 'add' ? 'Added' : 'Updated'} user sucessfully`,
          })
    }
    const FormSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Required"),
        name: Yup.string().required("Required."),
        password: type === 'add' ? Yup.string().required("Required") : Yup.string(),
        confirmPassword: type === 'add'
            ? Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords must match")
                .required("Required")
            : Yup.string()
    });

    const form = useForm({
        resolver: yupResolver(FormSchema),
        defaultValues: {
            name: selectedUser.name || '',
            priviliges: selectedUser?.priviliges || '',
            email: selectedUser?.email || '',
            networkGroup: selectedUser?.networkGroup || '',
            logo: selectedUser?.logo || 'null',
            type: selectedUser?.type || '',
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>User Name *</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter User Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {type === 'add' && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password *</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Enter User Password" {...field} />
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
                                                <Input type="password" placeholder="Enter Confirm Password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Id</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Enter Email Id" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="priviliges"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Priviliges</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose Priviliges" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {priviligesTypes.map((item, index) => (
                                                <SelectItem value={item} key={index}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="networkGroup"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Network Group Name</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose Network Group" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {networkGroupTypes.map((item, index) => (
                                                <SelectItem value={item} key={index}>
                                                    {item}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="type"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose User Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="All">All</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="logo"
                            render={({ field }) => (
                                <FormItem>

                                    {(field.value && field.value !== 'null' && field.value) &&
                                        <div className="relative w-52 h-52 border rounded">
                                            <img src={(field.value && field.value !== 'null') && field.value} className="object-contain w-52 h-52 rounded" />
                                            <p
                                                className="absolute top-0 right-0  rounded-full cursor-pointer"
                                                onClick={() => {
                                                    field.onChange("");
                                                }}
                                            >
                                                <CircleX color='red' />
                                            </p>
                                        </div>}
                                    <Label
                                        htmlFor="logo"
                                        className="cursor-pointer w-max font-bold flex max-w items-center space-x-2 p-2 bg-[#e1e6eb] rounded"
                                    >
                                        <Upload /><p>Upload Logo</p>
                                    </Label>
                                    <FormControl>
                                        <Input
                                            className="hidden"
                                            accept="image/*"
                                            id="logo"
                                            type="file"
                                            onChange={(e) => {
                                                const file = e.target.files[0];
                                                if (file) {
                                                    setUploadLogo(file);
                                                    const reader = new FileReader();
                                                    reader.onloadend = () => {
                                                        field.onChange(reader.result);
                                                    };
                                                    reader.readAsDataURL(file);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                    <Button form='userForm' type='submit' className='w-30'>{type === 'add' ? 'Add' : 'Update'}</Button>
                )}
            </div>
        </>
    )
}
